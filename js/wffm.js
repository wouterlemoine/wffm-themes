$(document).ready(function () {
    if ($('.scfFileUploadBorder').length) {
        $(".scfFileUpload").change(function () {
            var fileName = this.files.length > 0 ? this.files[0].name : '';
            $(this).next().show().find('.value').remove();
            if (fileName.length > 0) {
                var htmlindezevar = '' + fileName + ' ';
                $(this).next().css('display', 'block').html(htmlindezevar);
            }
        });
    }
});


// movinglabels  
$(document).ready(function () {
    $(".scfSectionContent > div > div input, .scfSectionContent > div > div textarea, .scfSectionContent > div > div select").each(function () {
        if ($(this).val() == '') {
            $(this).parent().parent().addClass('pristine');
        }
    });
});

// checken if jquery bevat on(), en indien niet: live() nemen. 
if (jQuery(document).on === undefined) {
    // jQuery 1.3+
    $(".fadinglabels input, .fadinglabels textarea, .scfSectionContent > div > div input, .scfSectionContent > div > div textarea, .scfSectionContent > div > div select, .scfConfirmPasswordGeneralPanel input").live("focus", function () {
        $(this).parent().parent().removeClass('pristine');
    });
    $(".fadinglabels input, .fadinglabels textarea, .scfSectionContent > div > div input, .scfSectionContent > div > div textarea, .scfSectionContent > div > div select, .scfConfirmPasswordGeneralPanel input").live("blur", function () {
        if ($(this).val() === "") {
            $(this).parent().parent().addClass('pristine');
        } else {
            $(this).parent().parent().removeClass('pristine');
        }
    });
}
else {
    // jQuery 1.7+
    $(document).on("focus", ".fadinglabels input, .fadinglabels textarea, .scfSectionContent > div > div input, .scfSectionContent > div > div textarea, .scfSectionContent > div > div select, .scfConfirmPasswordGeneralPanel input", function () {
        $(this).parent().parent().removeClass('pristine');
    });
    $(document).on("blur", ".fadinglabels input, .fadinglabels textarea, .scfSectionContent > div > div input, .scfSectionContent > div > div textarea, .scfSectionContent > div > div select, .scfConfirmPasswordGeneralPanel input", function () {
        if ($(this).val() === "") {
            $(this).parent().parent().addClass('pristine');
        } else {
            $(this).parent().parent().removeClass('pristine');
        }
    });
}
