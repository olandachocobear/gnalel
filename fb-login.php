<?php

//if(!session_id())
	session_start();

require_once __DIR__ . '/Facebook/autoload.php';

$fb = new \Facebook\Facebook([
  'app_id' => '166730180498268', // '244834619194333',
  'app_secret' => '00fd2a341bec303eba37ad2ff3123427', //'356a1b970dc8c93b5c54f7cad0303116',
  'default_graph_version' => 'v2.8',
    'persistent_data_handler' => 'session'
  //'default_access_token' => '{access-token}', // optional
]);
	
$helper = $fb->getRedirectLoginHelper();

	
# $permissions = array('email', 'user_location', 'user_birthday');         # Example permissions, in addition to the usual

$permissions = array();  # If permissions are not given, then it will assume default
$loginUrl = $helper->getLoginUrl('http://127.0.0.1:8001/lelang/fb-logincallback.php', $permissions);

echo '<a href="' . htmlspecialchars($loginUrl) . '">Log in with Facebook!</a>';

exit();

?>