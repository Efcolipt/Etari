
<?php 

if (isset($_POST['send'])) {
	$arr_post = [
		'ka_login'=>'pismoo',

	'product_id' => '14087',

	'last_name_client' => $_POST['last_name_client'],

	'phone_client' => $_POST['phone_client'],

	'country_client' => 'Россия'


];
	request_post('http://easy-business.ru/func/api/frontend/order.php',$arr_post);
}
     function request_post($url,$post){

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url ); // отправляем на

curl_setopt($ch, CURLOPT_HEADER, 1); // пустые заголовки

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // возвратить то что вернул сервер

curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false); // следовать за редиректами

curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);// таймаут4

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

curl_setopt($ch, CURLOPT_USERAGENT, 'Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.2.15 Version/10.00');

curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

$data = curl_exec($ch);

curl_close($ch);
return $data;

$result_post=request_post('http://easy-business.ru/func/api/frontend/order.php',$post); // отправляем данные
}


?>
<html>
<meta charset="UTF-8">
<title>Ваш заказ принят!</title>
<body>
	<style>
		h1{
			font-size: 56px;
		}
		p{
			font-weight: 300;
		}
		.container{
			max-width: 800px;
			margin:0 auto;
			text-align: center;
		}
		strong{
			font-size: 17px;
		}
		.nice{
			padding: 30px;
			border:1px solid #ccc;
			margin-top: 30px;
			border-radius: 10px;
		}
	</style>

	<div class="container">
		<h1>Благодарим Вас за заказ!</h1>
		<div class="nice">
			<h2 style="font-size: 26px;">"Ваш заказ успешно принят и поставлен в обработку!"</h2>
			<p>В ближайшее время <strong>Вам перезвонит менеджер</strong> для подтверждения заказа.</p>
			<p>Затем заказ будет подготовлен и отправлен на указанный Вами адрес.</p>
		</div>
		<a href="index.php">Вернуться на главную</a>
	</div>
</body>
</html>