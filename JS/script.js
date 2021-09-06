$('document').ready(function(){
    $('#sub').click(function(){
        event.preventDefault();
        var url="../images/";
       var myImg=$('#img').val();
       var index= myImg.lastIndexOf('\\');
       var fileName= myImg.slice(index+1,myImg.length);
       console.log(fileName);
       var mainUrl=url+fileName;
       console.log(mainUrl);
       console.log(myImg);
        var myImgData={
            img: mainUrl
        }
        console.log(myImgData);
        $.ajax({
            url: 'http://localhost:3000/images',
            method: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(myImgData),
    
            success: function(response){
                alert("Image Uploded");
            },
    
            error: function(){
                console.log("Errorrrr");
            },
            complete: function(){
                console.log("Completed")
            }
    
        });

        
    });
    $('#fetch').click(function(){
        event.preventDefault();
        $.ajax({
            url :'http://localhost:3000/images',
            method: 'GET',
            contentType: "application/json",
            dataType: "json",
            success : function (response) { 
                response.forEach(element => {
                    console.log(element);
                    $('.fetch').html("<img src='"+element.img+"'></img>");
                });
             },
            
           error : function(){
               console.log("Something went Wrong Check your Network...");
           },
           complete: function(){
               console.log("AJAX Call Completed...")
           }
 
       });
    });

    $('download').click(function(){
        
    });
});