/**
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