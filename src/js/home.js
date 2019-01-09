/**
 * Created by liqingguo on 2019/1/8.
 */
$(function(){
  //轮播图
  $(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
  //第一页数据
  $.getJSON('./mock/index.json',function(json){
    $(json).each(function(index,obj){
      $('.ulleft').append(`<li>${obj.serviceIndex}&nbsp;<span>></span></li>`)

      $('.ulleft').mouseover(function(){
        $('.ulright').show();
      }).mouseleave(function(){
        $('.ulright').hide();
      })

      $('.ulright').append('<ul></ul>')
        $('.ulleft>li').eq(index).mouseover(function(){
          $(this).css('background','rgba(0,0,0,.2)').siblings().css('background','#757881')
          $('.ulright>ul').eq(index).css('display','block').siblings().css('display','none')
        })

        let types  = index
      console.log(types)
        $($(this.serviceType)).each(function(index,item){
          $('.ulright>ul').eq(types).append(`<li>${item}</li>`)
        })

      //box1
      $('.content').append(`<div class="box1">
        <div class="boxTop">
          <div class="title">
            <div class="title1">${obj.serviceIndex}</div>
            <div class="title2">
            </div>
          </div>
          <div class="rows">
            <a href="" class="row">
              <div>
                <div class="money">
                  <span class="span2">查看详情</span>
                </div>
              </div>
            </a>
            <a href="" class="row">
              <div>
                <div class="money">
                  <span class="span2">查看详情</span>
                </div>
              </div>
            </a>
            <a href="" class="row">
              <div>
                <div class="money">
                  <span class="span2">查看详情</span>
                </div>
              </div>
            </a>
            <a href="" class="row">
              <div>
                <div class="money">
                  <span class="span2">查看详情</span>
                </div>
              </div>
            </a>
            <a href="" class="row">
              <div>
                <div class="money">
                  <span class="span2">查看详情</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="boxbottom">
          <a href="/fuwushang?serviceId=e1d5481068bf4f6aa2edc6c1062699d3">合家家政</a>
        </div>
      </div>`)

      $(obj.serviceType).each(function(index,i){
        $('.title2').eq(types).append(`<a>${i}</a>`)
        console.log(111)
      })
      $(obj.shopList).each(function(index,s){
        console.log(s)
        $('.row>div').eq(types).append(` <div class="rowtitle">${s.serviceName}</div>`)
        $('.row>div').eq(types).append(`<img src="${s.imgUrl}" alt="">`)
        $('.row>div').eq(types).append(`<p>${s.description}</p> `)
        $('.money').eq(types).append(`  <span class="span1">${s.price}元</span>/小时 `)
      })
    })
  })
  //头部动画逻辑
  $(window).scroll(function(){
    if($(window).scrollTop()>= $('.content').offset().top){
      $('.header').addClass('active')
    }
    if($(window).scrollTop()< $('.content').offset().top){
      $('.header').removeClass('active')
    }
  })

})