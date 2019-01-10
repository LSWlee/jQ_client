/*$(function () {  const $header = $('.header')  $(window).scroll(function () {    if ($(this).scrollTop()>71){      $header.addClass('on')    }else{      $header.removeClass('on')    }  })  const $citys = $('.LetterSearch span')  $citys.on('click',function () {    console.log($(this))      $citys.each(function () {        $(this).removeClass('active')    })    $(this).addClass('active')    })})*/$(function () {  $('.nav ul li').mouseover(function () {    $(this).css({'background':'white'}).siblings().css({'background':'#f1f1f1'})    $(this).children().attr('class','active').parent().siblings().children().attr('class','')  }).mouseleave(function () {    $(this).css('background','#f1f1f1')  })  const $head = $('.head')  $(window).scroll(function () {    if($(this).scrollTop()>71){      $head.addClass('on')    }else{      $head.removeClass('on')    }  })  $.ajax({    type:"GET",    url:"./data/index.json",    dataType:"json",    //请求成功后要执行的函数    success:function (data) {      $.each(data,function (index,item) {        $('.carousel .content .list .left ul').append('<li><a><div class="icon"></div><span>'+item.serviceIndex+'</span><span class="iconfont icon-jiantou"></span></a></div></li>')        $('.list').mouseover(function () {          $('.carousel .content .list .right').show()        }).mouseleave(function () {          $('.carousel .content .list .right').hide()        })        $('.carousel .content .list .left ul li').eq(index).mouseover(function () {          $(this).css('background','rgba(0,0,0,0.2)').siblings().css('background','#757881')          $('.carousel .content .list .right ul').eq(index).css('display','block').siblings().css('display','none')        }).mouseleave(function () {          $(this).css('background','#757881')        })        $('.carousel .content .list .right ul li').mouseover(function () {          $(this).css('color','red').siblings().css('color','#000')        })        $('.carousel .content .list .right').append('<ul></ul>')        let types  = index        $(this.serviceType).each(function(index,item){          $('.carousel .content .list .right>ul').eq(types).append(`<li>${item}</li>`)        })        $('#main .every').append(`<div class="clean">        <div class="wrap">          <p>${item.serviceIndex}</p>          <div class="title">            <ul></ul>            <a href="javascript:;" class="more">              <span>更多服务</span>              <i class="iconfont icon-jiantou"></i>            </a>          </div>          <div class="info">          </div>        </div>        <div class="lists">          <a href="javascript:;"></a>        </div>      </div>`)        $(this.serviceType).each(function (index,item) {          $('.title ul').eq(types).append(`<li>                <a href="javascript:;">${item}</a>              </li>`)        })        $(this.shopList).each(function (index,item) {          $('.info').eq(types).append(`<a href="javascript:;">              <div class="classinfo">                <img src=${item.imgUrl} alt="">                <h2>家庭保洁</h2>                <span class="scription">${item.description}</span>                <div class="price">                  <span>${item.price}</span><span>元/小时</span>                  <span>查看详情</span>                </div>              </div>            </a>`)        })      })    }  })  $.ajax({    type:"GET",    url:"./data/city.json",    dataType:"json",    success:function (data) {      $(data[0].hotCity).each(function (index,item) {        $('dd').append(`<a>${item}</a>`)      })    }  }) $('.nav li').eq(2).children().click(function () {   window.location.href = 'Shops.html' })});/**
 * Created by lsw on 2019/1/10 0010.
 */
$(function () {
  const $header = $('#shop .header')
  $(window).scroll(function () {
    if($header.scrollTop()>71){
      $(this).addClass = 'on'
    }else{
      $(this).removeClass = 'on'
    }
  })

  //发送请求
  // $.ajax({
  //   type:"GET",
  //   url:"./data/service.json",
  //   dataType:"json",
  //   success:(function (data) {
  //     $(data).each(function (index,item) {
  //       $('.shops ul').append(`<li>
  //             <a href="javascript:;">
  //               <img src=${item.imgUrl} alt="">
  //               <div class="title">
  //                 <img src="./src/images/home1.png" alt="">
  //                 <span>${item.title}</span>
  //               </div>
  //               <div class="ticket">
  //                 <div class="left">
  //                   <span>已接单<span>${item.orderCount}</span>单</span>
  //                 </div>
  //                 <div class="right">
  //                   <span>好评<span>${item.positiveRate}</span>%</span>
  //                 </div>
  //               </div>
  //             </a>
  //           </li>`)
  //     })
  //     $('.shops ul li').mouseover(function () {
  //       $(this).css('box-shadow','5px 10px 11px 1px grey')
  //     }).mouseleave(function () {
  //       $(this).css('box-shadow','')
  //     })
  //   })
  // })

  $sendCode()

  $.ajax({
    type:"GET",
    url:"./data/city.json",
    dataType:"json",
    success:function (data) {
      $(data[0].hotCity).each(function (index,item) {
        $('dd').append(`<a>${item}</a>`)
      })
    }
  })

  $('.btn').click(function () {
    $sendCode()
  })

  function $sendCode() {
    $.ajax({
      type:"GET",
      url:"./data/service.json",
      dataType:"json",
      success:(function (data) {
        $(data).each(function (index,item) {
          $('.shops ul').append(`<li>
              <a href="javascript:;">
                <img src=${item.imgUrl} alt="">
                <div class="title">
                  <img src="./src/images/home1.png" alt="">
                  <span>${item.title}</span>
                </div>
                <div class="ticket">
                  <div class="left">
                    <span>已接单<span>${item.orderCount}</span>单</span>
                  </div>
                  <div class="right">
                    <span>好评<span>${item.positiveRate}</span>%</span>
                  </div>
                </div>
              </a>
            </li>`)
        })
        $('.shops ul li').mouseover(function () {
          $(this).css('box-shadow','5px 10px 11px 1px grey')
        }).mouseleave(function () {
          $(this).css('box-shadow','')
        })
      })
    })
  }
})