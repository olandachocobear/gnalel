<?php
/*
if($_SERVER['HTTP_HOST']!=='localhost:8001'){
  header('location: http://localhost:8001/lelang/');
  }
*/

session_start();

/*
include 'facebook/facebook.php';
include 'facebook/facebookapp.php';
include 'facebook/FacebookClient.php';
include 'Facebook\HttpClients\HttpClientsFactory.php';
include 'Facebook\HttpClients\FacebookHttpClientInterface.php';
include 'Facebook\HttpClients\FacebookCurl.php';
include 'Facebook\HttpClients\FacebookCurlHttpClient.php';

include 'Facebook\PseudoRandomString\PseudoRandomStringGeneratorFactory.php';
include 'Facebook\PseudoRandomString\PseudoRandomStringGeneratorInterface.php';
include 'Facebook\PseudoRandomString\PseudoRandomStringGeneratorTrait.php';
include 'Facebook\PseudoRandomString\McryptPseudoRandomStringGenerator.php';

include  'Facebook\Url\UrlDetectionInterface.php';
include 'Facebook\Url\FacebookUrlDetectionHandler.php';

include 'Facebook\PersistentData\PersistentDataInterface.php';
include 'Facebook\PersistentData\FacebookMemoryPersistentDataHandler.php';
include 'Facebook\PersistentData\PersistentDataFactory.php';

include 'Facebook\FacebookRequest.php';
include 'Facebook\Url\FacebookUrlManipulator.php';
include 'Facebook\Authentication\AccessToken.php';
include 'Facebook\Http\RequestBodyInterface.php';
include 'Facebook\Http\RequestBodyUrlEncoded.php';
include 'Facebook\Http\GraphRawResponse.php';
include 'Facebook\FacebookResponse.php';
include 'Facebook\Exceptions\FacebookSDKException.php';
include 'Facebook\Exceptions\FacebookResponseException.php';
include 'Facebook\Exceptions\FacebookAuthenticationException.php';
*/
require_once __DIR__ . '/Facebook/autoload.php';

/*
$access_token_url ="https://graph.facebook.com/oauth/access_token?client_id=244834619194333&client_secret=356a1b970dc8c93b5c54f7cad0303116&grant_type=client_credentials";

$access_token = file_get_contents($access_token_url);

$access_token = explode('|',$access_token);

$access_token = $access_token[1];
*/

/*$fb = new \Facebook\FacebookApp('244834619194333','356a1b970dc8c93b5c54f7cad0303116');
*/

$fb = new \Facebook\Facebook([
  'app_id' => '166730180498268', // '244834619194333',
  'app_secret' => '00fd2a341bec303eba37ad2ff3123427', //'356a1b970dc8c93b5c54f7cad0303116',
  'default_graph_version' => 'v2.8',
  'persistent_data_handler' => 'session'
  //'default_access_token' => '{access-token}', // optional
]);


// Use one of the helper classes to get a Facebook\Authentication\AccessToken entity.
   $helper = $fb->getRedirectLoginHelper();


//$_SESSION['FBRLH_state']=$_GET['state'];

if (isset($_GET['state'])) {
    //$helper->getPersistentDataHandler()->set('state', $_GET['state']);
	echo  '<br>ay'.$helper->getPersistentDataHandler()->get('state');
	echo '<br>by'. $_SESSION['FBRLH_state'];
}

//   $helper = $fb->getJavaScriptHelper();
//   $helper = $fb->getCanvasHelper();
//   $helper = $fb->getPageTabHelper();

$accessToken = $helper->getAccessToken();
echo "<br>".$accessToken;
/*
if (! isset($accessToken)) {
if ($helper->getError()) {
  header('HTTP/1.0 401 Unauthorized');
  echo "Error: " . $helper->getError() . "\n";
  echo "Error Code: " . $helper->getErrorCode() . "\n";
  echo "Error Reason: " . $helper->getErrorReason() . "\n";
  echo "Error Description: " . $helper->getErrorDescription() . "\n";
} else {
  header('HTTP/1.0 400 Bad Request');
  echo 'Bad request';
}
exit;
}
*/

try {
    $accessToken = $helper->getAccessToken();
	var_dump($accessToken);
} catch(Facebook\Exceptions\FacebookResponseException $e) {
    // When Graph returns an error
    echo 'Graph returned an error: ' . $e->getMessage();
    exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
    // When validation fails or other local issues
    echo 'Facebook SDK returned an error: ' . $e->getMessage();
    exit;
}



try {
  // Get the \Facebook\GraphNodes\GraphUser object for the current user.
  // If you provided a 'default_access_token', the '{access-token}' is optional.
  $response = $fb->get('/me?fields=id,name', $access_token);
} catch(\Facebook\Exceptions\FacebookResponseException $e) {
  // When Graph returns an error
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(\Facebook\Exceptions\FacebookSDKException $e) {
  // When validation fails or other local issues
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}


$me = $response->getGraphUser();
echo 'Logged in as ' . $me->getName();

?>