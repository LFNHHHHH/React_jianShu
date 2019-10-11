import * as actiontypes from './actiontypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    writeList: [{
        "id": "1",
        "ren": "三儿王屿",
        "zi": "165.9K",
        "xi": "3.5K",
        "img": "https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        "id": "2",
        "ren": "梅拾璎",
        "zi": "272.7K",
        "xi": "29.1K",
        "img": "https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        "id": "3",
        "ren": "简书钻首席小管家",
        "zi": "188.2K",
        "xi": "145.6K",
        "img": "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        "id": "4",
        "ren": "无限猴子",
        "zi": "406.1K",
        "xi": "2.1K",
        "img": "https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        "id": "5",
        "ren": "乔汉童",
        "zi": "468.5K",
        "xi": "1.9K",
        "img": "https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    }],
    recommendsList: [{
        "id": "1",
        "img": "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },{
        "id": "2",
        "img": "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },{
        "id": "3",
        "img": "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },{
        "id": "4",
        "img": "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }],
    articleList: [],
    articlePage: 1,
    showScroll: false
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case actiontypes.GET_HOME_LIST:  // 获取文章列表数据
            return state.merge({
                    articleList: action.articleList
                })
        case actiontypes.ADD_HOME_LIST:  // 点击加载下一页
            return state.merge({
                    articleList: state.get('articleList').concat(action.articleListMore),
                    articlePage: action.page
                })
        case actiontypes.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default: 
            return state;
    }
}