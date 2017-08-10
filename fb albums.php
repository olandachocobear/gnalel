<?php
include 'facebook/facebook.php';
$config = array();
$config['appId'] = YOUR_APP_ID;
$config['secret'] = YOUR_APP_SECRET;
$config['fileUpload'] = false; // optional

$facebook = new Facebook($config);
$user_id = $facebook->getUser();
$access_token = $facebook->getAccessToken();
?>
<?php
if ($user_id && $access_token) {

    // We have a user ID, so probably a logged in user.
    // If not, we'll get an exception, which we handle below.
    try {

        $params = array(
            'method' => 'get',
            'access_token' => $access_token
        );

        if (isset($_GET['aid']) && $_GET['aid'] != '') {
            $aid = $_GET['aid'];
            $user_album_photos = $facebook->api('/' . $aid . '/photos', $params);
            //echo "Photos<br/>"; 
            ?>

            <?php foreach ($user_album_photos['data'] as $key => $value) {
                ?>
                <div class="album">
                    <div class="frame photo_frame">
                        <div class="edit-photo-nohover" style="display:block">
                            <div><input type="checkbox" id="fbimport_id<?php echo $value['id']; ?>" value="<?= $value['id'] . ',' . $value['images']['0']['source'] . ',' . $value['name'] ?>" name="fbimport[]" > <span>Import this Memory</span></div>

                        </div>
                        <table class="test">
                            <tr><td>
                                    <a href="javascript:void(0)"><img src="<?= $value['images']['0']['source'] ?>" height="100" width="100" /></a>
                                </td>
                            </tr>
                        </table>
                        <h3 id='bottomcaption'><?php echo $value['name']; ?></h3>
                    </div><br/>
                </div>
                <?php }
            ?>


        <?php
        } else {
            $user_albums = $facebook->api('/me/albums', $params);
            echo '<h3 class="page-title">Select Your Facebook Album</h3><br/><br/>';
            foreach ($user_albums['data'] as $key => $value) {

                /* load album if not blank */
                if (isset($value['count']) && $value['count'] != '' && $value['count'] != NULL && $value['count'] > 0) {

                    /* check if album has a cover photo. if not than load a default image */
                    if (isset($value['cover_photo']) && $value['cover_photo'] != '' && $value['cover_photo'] != NULL) {
                        $user_album_cover = $facebook->api('/' . $value['cover_photo'], $params);
                        $album_thumbnail = $user_album_cover['images']['0']['source'];
                    } else {
                        $album_thumbnail = 'default_thumb.gif';
                    }
                    /* check if album has cover photo end */
                    ?>
                    <div class="album">
                        <div class="frame photo_frame">
                            <table class="test">
                                <tr><td>
                                        <a href="?aid=<?= $value['id'] ?>" ><img src="<?= $album_thumbnail ?>" height="100" width="100" /></a>
                                    </td>
                                </tr>
                            </table>
                            <h3 id='bottomcaption'><?php echo $value['name']; ?></h3>
                        </div><br/>
                    </div>

                    <?php
                }//if(isset($value['count']) && $value['count'] != '' && $value['count'] != NULL && $value['count']>0)
                /* load album if not blank end */
            }
        }
    } catch (FacebookApiException $e) {
        // If the user is logged out, you can have a 
        // user ID even though the access token is invalid.
        // In this case, we'll get an exception, so we'll
        // just ask the user to login again here.
        $login_url = $facebook->getLoginUrl();
        echo 'Please <a href="' . $login_url . '">login.</a>';
        error_log($e->getType());
        error_log($e->getMessage());
    }
} else {

    // No user, print a link for the user to login
    $login_url = $facebook->getLoginUrl();
    echo 'Please <a href="' . $login_url . '">login.</a>';
}
?>