import styled from 'styled-components'

export const DetailWrapper = styled.div`
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    
    .warp{
        width: 730px;
        margin-top: 20px;
        margin-bottom: 24px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);

        .main{
            padding: 20px;

            .contain{
                .imgStyle{
                    max-width: 100%;
                    width: auto;
                    height: auto;
                    vertical-align: middle;
                    border: 0;
                    padding: 20px 0;

                }
                p{
                    margin-bottom: 20px;
                    word-break: break-word;
                    font-weight: 400;
                    line-height: 30px;
                    font-size: 16px;
                    color: #404040;
                }
            }
            h1{
                color: #404040;
                font-size: 30px;
                font-weight: 700;
                word-break: break-word;
                margin-bottom: 40px;
            }
        }
        
    }
    
    
`
