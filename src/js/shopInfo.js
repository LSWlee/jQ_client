/**
 * Created by lsw on 2019/1/10 0010.
 */
$(function () {
  $.ajax({
    type:"GET",
    url:"./data/comment.json",
    dataType:"json",
    success:function (data) {
     let groupedArray = group(data,10)
      console.log( groupedArray)
      //创建分页器共九个
      $(groupedArray).each(function (index, item) {
        $('.showPage').append(`<a href="javascript:;" class="num">${index+1}</a>`)
      })
      //初始化给第一个添加样式
      $('.showPage').children().eq(0).css({'background':'red','color':'white'})
      //初始化显示第一组数组
      $(groupedArray[0]).each(function (index,item) {
        loop(item)
      })

      $('.showPage a').click(function () {
        $(this).css({'background':'red','color':'white'}).siblings().css({'background':'white','color':'#000'})
        //点击删除上一组数组，让当前索引这组显示
        $('.commentDiv .conmentss').remove()
        $(groupedArray[this.textContent-1]).each(function (index,item) {
          loop(item)
        })
      })
    }
  })
  //处理星星逻辑，处理点击上一页下一个逻辑

  function group(array,subGroupLength) {
    let index = 0
    let newArray = []
    while (index<array.length){
      newArray.push(array.slice(index,index += subGroupLength))
    }
    return newArray
  }

  function loop(item) {
    $(item).each(function (i,n) {
      $('.commentDiv').append(`<div class="conmentss">
          <img src=${item.iconUrl} alt="" class="touxiang">
          <ul>
            <li>${item.nick}</li>
            <li>
              <span class="star">
                <img src="./src/images/red_star.png" alt="">
                <img src="./src/images/red_star.png" alt="">
                <img src="./src/images/red_star.png" alt="">
                <img src="./src/images/red_star.png" alt="">
                <img src="./src/images/red_star.png" alt="">
              </span>
              <em>
                2019-01-09
              </em>
            </li>
            <li class="commentdetail">${item.comment}</li>
            <li class="commentposition">
              <img src="./src/images/position2.jpg" alt="">
              ${item.area}${item.city}
            </li>
          </ul>
        </div>`)
    })
  }

})