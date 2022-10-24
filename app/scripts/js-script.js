function superClick(el) {
			el.style.background = '#139CDD';
			el.style.color='black'
			}


var h35Shoved = false;



window.onload = function() {
    document.getElementById('SuperButton').onclick = function()
    {
        if(document.body.className != 'new_class')
        {
            document.body.className = 'new_class';
        }
        else
        {
            document.body.className = '';
        }
    }
}
function changeDisplay(){
	const header3 = document.getElementById("1")
	header3.style.display=h35Shoved ? 'block' : 'none';
	h35Shoved = !h35Shoved;
}
