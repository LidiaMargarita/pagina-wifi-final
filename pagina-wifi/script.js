document.getElementById('nombre').addEventListener('input', function() {
	this.value = this.value.replace(/[0-9]/g,'');
});