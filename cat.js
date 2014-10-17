function replace_picture(pic_id, output_png)
{
    var picId = document.getElementById(pic_id);
    picId.addEventListener("click", function(e)
    {
	debugger;
	picId.firstElementChild.setAttribute("src",output_png);
    });
}

console.log("asdfasdf"); 
var pic_id = ['cat1','cat2','cat12','cat123','paste12'];


var output_png = ['catfile1.png','cat2.png','catfile1file2.png','catfile1file2file3.png','pastefile1file2.png'];


for (var i = 0; i < pic_id.length; i++)
{
    console.log(pic_id,output_png, i);
    replace_picture(pic_id[i],output_png[i]);
}




