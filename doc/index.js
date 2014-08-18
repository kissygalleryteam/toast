/**
 * @fileoverview
 * @author
 * @module toast
 **/
KISSY.add(function (S, Node, Base) {
    var EMPTY = '';
    var $ = Node.all;
    
    return {

        _getToast : function(){

            if (!$('.tbc-toast').length) {
                var $toast  = '<div class="tbc-toast" style="display:none">';
                    $toast +=   '<span class="tbc-toast-tip">';
                    $toast +=     '<span class="tbc-toast-inner">';
                    $toast +=       '<i class="tbc-toast-ico"></i>';
                    $toast +=       '<span class="tbc-toast-text">数据加载中...</span>';
                    $toast +=     '</span>';
                    $toast +=   '</span>';
                    $toast += '</div>';

                $('body').append($toast);
            }

            return $('.tbc-toast');
            
        },

        show : function(msg, type){
            var $el = this._getToast();

            $el.removeClass('tbc-toast-ok').removeClass('tbc-toast-warn').removeClass('tbc-toast-err');
            $el.addClass('tbc-toast-'+type);
            $('.tbc-toast-text', $el).text(msg);

            $el.slideDown(0.1);

            setTimeout(function() {
                $el.slideUp(0.5);
            }, 3000);
        }

    };

}, {requires:['node', 'base', './index.css']});



