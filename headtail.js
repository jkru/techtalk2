function replace_picture(pic_id, output_png)
{
    var picId = document.getElementById(pic_id);
    picId.addEventListener("click", function(e)
    {
	debugger;
	picId.firstElementChild.setAttribute("src",output_png);
    });
}
var pic_id2 = ['headfile1.png', 'head-4file1.png', 'tailfile1.png', 'tail-4.png'];
var output_png2 = ['headfile1', 'head4file','tailfile', 'tail4file'];

for (var j = 0; j < pic_id2.length; j++)
{
    console.log(pic_id2,output_png2, j);
    replace_picture(pic_id2[j],output_png2[j]);
}



