let region;




let changeText = (region) => {
	const index = document.querySelector('#list')

	if (region === 1){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">384 900</a></li><li  class="purchase__links"><a class="link"  href="">384 870</a></li><li  class="purchase__links"><a class="link"  href="">384 850</a></li><li  class="purchase__links"><a class="link"  href="">384 960</a></li><li  class="purchase__links"><a class="link"  href="">384 820</a></li><li  class="purchase__links"><a class="link"  href="">384 800</a></li><li  class="purchase__links"><a class="link"  href="">384 830</a></li><li  class="purchase__links"><a class="link"  href="">384 840</a></li>'
	}
	if (region === 2){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">აბაშა</a></li><li  class="purchase__links"><a class="link"  href="">მესტია</a></li> <li  class="purchase__links"><a class="link"  href="">ზუგდიდი</a></li> <li  class="purchase__links"><a class="link"  href="">სენაკი</a></li> <li  class="purchase__links"><a class="link"  href="">ფოთი</a></li> <li  class="purchase__links"><a class="link"  href="">ჩხოროწყუ</a></li> <li  class="purchase__links"><a class="link"  href="">წალენჯიხა</a></li> <li  class="purchase__links"><a class="link"  href="">ხობი</a></li>' 
	}
	if (region === 3){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">გორი</a></li> <li  class="purchase__links"><a class="link"  href="">ქარელი</a></li> <li  class="purchase__links"><a class="link"  href="">ხაშური</a></li>'
	}
	if (region === 4){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">ამბროლაური</a></li> <li  class="purchase__links"><a class="link"  href="">ლენტეხი</a></li> <li  class="purchase__links"><a class="link"  href="">ონი</a></li> <li  class="purchase__links"><a class="link"  href="">ცაგერი</a></li>'
	}
	if (region === 5){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">ახალგორი</a></li><li  class="purchase__links"><a class="link"  href="">დუშეთი</a></li><li  class="purchase__links"><a class="link"  href="">თიანეთი</a></li><li  class="purchase__links"><a class="link"  href="">მცხეთა</a></li> <li  class="purchase__links"><a class="link"  href="">ყაზბეგი</a></li>	'	
	}
	if (region === 6){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">ახმეტა</a></li><li  class="purchase__links"><a class="link"  href="">გურჯაანი</a></li><li  class="purchase__links"><a class="link"  href="">დედოფლისწყარო</a></li><li  class="purchase__links"><a class="link"  href="">თელავი</a></li><li  class="purchase__links"><a class="link"  href="">ლაგოდეხი</a></li><li  class="purchase__links"><a class="link"  href="">საგარეჯო</a></li><li  class="purchase__links"><a class="link"  href="">სიღნაღი</a></li><li  class="purchase__links"><a class="link"  href="">ყვარელი</a></li>'
	}
	if (region === 7){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">ადიგენი</a></li><li  class="purchase__links"><a class="link"  href="">ასპინძა</a></li><li  class="purchase__links"><a class="link"  href="">ახალქალაქი</a></li><li  class="purchase__links"><a class="link"  href="">ახალციხე</a></li><li  class="purchase__links"><a class="link"  href="">ბორჯომი</a></li><li  class="purchase__links"><a class="link"  href="">ნინოწმინდა</a></li>'
	}
	if (region === 8){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">ბათუმი</a></li>'
	}
	if (region === 9){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">ბოლნისი</a></li><li  class="purchase__links"><a class="link"  href="">გარდაბანი</a></li><li  class="purchase__links"><a class="link"  href="">დმანისი</a></li><li  class="purchase__links"><a class="link"  href="">თეთრი წყარო</a></li><li  class="purchase__links"><a class="link"  href="">მარნელუი</a></li><li  class="purchase__links"><a class="link"  href="">რუსთავი</a></li><li  class="purchase__links"><a class="link"  href="">წალკა</a></li>'
	}
	if (region === 10){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">ლანჩხუთი</a></li><li  class="purchase__links"><a class="link"  href="">ოზურგეთი</a></li><li  class="purchase__links"><a class="link"  href="">ჩხოროწყუ</a></li>'
	}
	if (region === 11){
		index.innerHTML =
		'<input class = "address" type="text" placeholder="მიუთითეთ თქვენი მისამართი">'
	}
	if (region === 12){
		index.innerHTML =
		'<li  class="purchase__links"><a class="link"  href="">ბაღდათი</a></li> <li  class="purchase__links"><a class="link"  href="">ვანი</a></li><li  class="purchase__links"><a class="link"  href="">ზესტაფონი</a></li><li  class="purchase__links"><a class="link"  href="">თერჯოლა</a></li><li  class="purchase__links"><a class="link"  href="">სამტრედია</a></li><li  class="purchase__links"><a class="link"  href="">საჩხერე</a></li><li  class="purchase__links"><a class="link"  href="">ტყიბული</a></li><li  class="purchase__links"><a class="link"  href="">წყალტუბო</a></li><li  class="purchase__links"><a class="link"  href="">ქუთაისი</a></li><li  class="purchase__links"><a class="link"  href="">ჭიათურა</a></li><li  class="purchase__links"><a class="link"  href="">ხარაგაული</a></li>'
	}
}



 
 