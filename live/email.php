<?php

	$destination = $_REQUEST['destination'];
	$email = $_REQUEST['email'];
	$sender = $_REQUEST['sender'];
	$message_content = $_REQUEST['message'];

	$subject = "Website Contact Form";
	$message = "Sender: {$sender}\nContent: {$message_content}";
	$headers = "From: {$email}";

	if (isset($destination)) {

		mail($destination, $subject,$message, $headers);
		echo json_encode(array('status' => true, 'message' => "Thanks {$sender}. Your email has been sent."));
	}

	else {

		echo json_encode(array('status' => false, 'message' => "Sorry, there was a problem sending this email. Please try again later."));
	}

?>