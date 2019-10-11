import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 300px;
    display: flex;
    justify-content: space-between;

    .homeLeft{
        width: 625px;
        margin-left: 15px;
        margin-top: 30px;
    }
    .homeRight{
        width: 280px;
        padding: 30px 0 0;
    }
    .toTop{
        position: fixed;
        font-size: 12px;
        right: 100px;
        bottom: 100px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border: 1px solid #ccc;
        cursor: pointer;
    }

`


export const ListWrapper = styled.ul`
    .banner{
        margin-bottom: 35px;
        border-radius: 6px;
        overflow: hidden;
        z-index: 1000;
        width: 100%;
        
        img{
            width: 100%;
            height: 270px;
            background-color: hsla(0,0%,71%,.2);
        }
    }
    .textD{
        text-decoration: none;
    }
    .ListItem{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;

        .listInfo{
            padding-right: 17px;
        }
        h3{
            color: #333;
            margin: -7px 0 4px;
            display: inherit;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
        }
        p{
            margin: 0 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
        }
        .meta{
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;

            .zuan{
                color: #ea6f5a!important;
            }
            span{
                margin-right: 10px;
                color: #b4b4b4;

                i{
                    font-size: 12px;
                }
            }
            .renx{
                margin-right: 10px;
                color: #b4b4b4;
                text-decoration: none;
            }
        }
        img{
            width: 150px;
            border-radius: 4px;
            border: 1px solid #f0f0f0;
        }

    }
    .loadMore{
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin: 30px 0;
        background: #a5a5a5;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        cursor: pointer;
    }

`


export const RecommendWrapper = styled.ul`
    min-height: 184px;
    margin-top: -4px;
    padding-bottom: 4px;

    img{
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`


export const WriteWrapper = styled.div`
        margin: 20px 0 20px;
        text-align: left;
        list-style: none;

        .title{
            display: flex;
            justify-content: space-between;
            align-items: center;

            span{
                font-size: 14px;
                color: #969696;

                .iconswithc{
                    display: inline-block;
                    font-size: 12px;
                    height:20px;
                    line-height: 20px;
                    transition: all .2s ease-in;
                    transform-origin: center center;
                }

            }
        }
        .list{
            height: 63px;
            .listItem{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 15px;

                .avatar{
                    width: 46px;
                    height: 46px;
                    margin-right: 10px;
                    margin-bottom: 15px;

                    img{
                        width: 100%;
                        height: 100%;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                    }
                }
                .author{
                    display: flex;
                    flex-direction: column;
                    align-items: left;
                    justify-content: space-around;
                    height: 50px;
                    margin-right: 50px;
                    margin-bottom: 10px;

                    .authorName{
                        font-size: 14px;
                        color: #333;
                        display: block;
                    }
                    .authorFllowNumber{
                        font-size: 12px;
                        color: #969696;
                        white-space: nowrap;
                    }
                }
                
            }
            .fllow{
                display: flex;
                align-items: top;
                height: 50px;

                .fllowItem{
                    font-size: 13px;
                    color: #42c02e;
                    white-space: nowrap;
                }
            }
            
        }


`