$(function(){
    $('a.zipcode_search').click(function(e){
        e.preventDefault();

        var $parent = $(this).parent();
        var $zipcode = $('input.zipcode');
        var $error = $('div.zipcode_error');



        var city = $.trim($('input.city').val());
        var address = $.trim($('input.address').val());

        if(city == '' || address == ''){
            $zipcode.val('');

            $error.show();
            return false;
        }

        $.ajax({
            url: 'https://postit.lt/data/v2/',
            dataType: 'json',
            crossDomain: true,
            data: {
                city: city,
                address: address,
                key: 'CUoHg07PebnGDZpS1bXS'
            },
            success: function(resp){
                if(resp && resp.total === 1){
                    $zipcode.val('LT-' + resp.data[0].post_code);
                }
                else {
                    $zipcode.val('');
                    $error.show();
                }
            },
            error: function(){
                $zipcode.val('');
                $error.show();
            },
        });
    });
});
