let input = document.querySelector('input');
let observable = Rx.Observable.fromEvent(input, 'input');

observable
.map(event => event.target.value)
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
	next: function(value) {
  	console.log(value);
  }
});