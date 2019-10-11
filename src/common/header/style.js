import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;

    .logo{
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 56px;
        background: url(${logoPic});
        background-size: contain;
    }

    .nav{
        display: flex;
        justify-content: space-between;
        width: 960px;
        height: 100%;
        /* margin: 0 auto; */
        margin-left: 260px;

        .navLeft{
            display: flex;
            align-items: center;
            justify-content: left;
            
            .textD{
                text-decoration: none;
            }
            .navItem{
                padding: 0 15px;
                font-size: 17px;
                color: #ea6f5a;
            }
            .navDownload{
                padding: 0 15px;
                font-size: 17px;
                color: #333;
            }

            .navInput{
                display: flex;
                align-items: center;
                position: relative;

                /* input 输入框动画效果开始 */
                .slide-enter{
                    transition: all .2s ease-out;
                }
                .slide-enter-active{
                    transition: all .2s ease-out;
                    width: 240px;
                }
                .slide-exit{
                    transition: all .2s ease-out;
                }
                .slide-exit-active{
                    width: 160px;
                }
                /* input 输入框动画效果结束 */

                .iconfont{
                    position: absolute;
                    text-align: center;
                    color: #666;
                    width: 30px;
                    right: 5px;
                    border-radius: 15px;
                    line-height: 30px;
                }
                .iconfocused{
                    background-color: #777;
                    color: #f0f0f0;
                }
                .navSearch{
                    outline: none;
                    width: 160px;
                    height: 38px;
                    padding: 0 36px 0 20px;
                    border: none;
                    border-radius: 19px;
                    color: #666;
                    background: #eee;
                }
                .focused{
                    width:240px;
                }
                .searchInfo{
                    z-index: 1;
                    position: absolute;
                    left: 0;
                    top: 56px;
                    width: 240px;
                    padding: 0 20px;
                    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
                    background-color: #fff;

                    .searchInfoTitle{
                        margin-top: 20px;
                        margin-bottom: 15px;
                        line-height: 20px;
                        font-size: 14px;
                        color: #969696;

                        .searchInfoSwitch{
                            float: right;
                            font-size: 13px;
                            cursor: pointer;

                            .iconswithc{
                                display: block;
                                font-size: 12px;
                                color: #969696;
                                height:20px;
                                line-height: 20px;
                                margin-right: 50px;
                                transition: all .2s ease-in;
                                transform-origin: center center;
                            }
                        }
                        .searchInfoItem{
                            display: block;
                            float: left;
                            line-height: 20px;
                            padding: 0 5px;
                            font-size: 12px;
                            margin-right: 10px;
                            margin-bottom: 15px;
                            border: 1px solid #ddd;
                            color: #787878;
                            border-radius: 3px; 
                        }
                    }
                }
            }
        }
        .navRight{
            display: flex;
            align-items: center;
            justify-content: right;

            .navAa, .navLoinIn{
                padding: 0 15px;
                font-size: 15px;
                color: #969696;
                cursor: pointer;
            }
        }
    }

    .navRegistered{
        width: 80px;
        height: 38px;
        border-radius: 19px;
        padding: 0 20px;
        margin-right: 20px;
        font-size: 14px;
        border: 1px solid #ec6149;
        color: #ea6f5a;
        background-color: white;
        outline: none;
    }

    .navWrite{
        height: 40px;
        border-radius: 19px;
        padding: 0 20px;
        margin-right: 20px;
        font-size: 14px;
        border: 1px solid #ec6149;
        color: white;
        background-color: #ea6f5a;
        outline: none;
    }
`
