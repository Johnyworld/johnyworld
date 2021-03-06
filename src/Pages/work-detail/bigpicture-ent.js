import React, { Component } from 'react';
import BigpictureLogoSVG from './bigpicture-ent-svglogo';
import StyleSheetItem from '../WorkDetailStylesheet';
import NormalSection from '../../Components/partials/Normal-section';

import styleColors from '../../Images/work-detail-bigpic/bigpic-style-color.png';
import styleFonts from '../../Images/work-detail-bigpic/bigpic-style-fonts.png';
import styleIcons from '../../Images/work-detail-bigpic/bigpic-style-icons.jpg';
import styleButtons from '../../Images/work-detail-bigpic/bigpic-style-buttons.png';

let workDesignBigpictureEnt, sub01, sub02, bevl00, bevl01, bevl02, bevl03, bevl04, bevl05;
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if ( isMobile ) {
    workDesignBigpictureEnt = require( '../../Mobile-images/work-detail-bigpic/bigpic-design.jpg' );
    sub01 = require( '../../Mobile-images/work-detail-bigpic/bigpic-sub-01.jpg' );
    sub02 = require( '../../Mobile-images/work-detail-bigpic/bigpic-sub-02.jpg' );
    bevl00 = require( '../../Mobile-images/work-detail-bigpic/bevl-00.jpg' );
    bevl01 = require( '../../Mobile-images/work-detail-bigpic/bevl-01.jpg' );
    bevl02 = require( '../../Mobile-images/work-detail-bigpic/bevl-02.jpg' );
    bevl03 = require( '../../Mobile-images/work-detail-bigpic/bevl-03.jpg' );
    bevl04 = require( '../../Mobile-images/work-detail-bigpic/bevl-04.jpg' );
    bevl05 = require( '../../Mobile-images/work-detail-bigpic/bevl-05.jpg' );
} else {
    workDesignBigpictureEnt = require( '../../Images/work-detail-bigpic/bigpic-design.jpg' );
    sub01 = require( '../../Images/work-detail-bigpic/bigpic-sub-01.jpg' );
    sub02 = require( '../../Images/work-detail-bigpic/bigpic-sub-02.jpg' );
    bevl00 = require( '../../Images/work-detail-bigpic/bevl-00.jpg' );
    bevl01 = require( '../../Images/work-detail-bigpic/bevl-01.jpg' );
    bevl02 = require( '../../Images/work-detail-bigpic/bevl-02.jpg' );
    bevl03 = require( '../../Images/work-detail-bigpic/bevl-03.jpg' );
    bevl04 = require( '../../Images/work-detail-bigpic/bevl-04.jpg' );
    bevl05 = require( '../../Images/work-detail-bigpic/bevl-05.jpg' );
}

class BigpictureEnt extends Component {
    render() {
        return (
            <div className="detail-each">
                <section className="sec-padded-end sec-style-guide">
                    <div className="l-wrapper">
                        <StyleSheetItem title="Colors" imgName="Styles-Color" imgSrc={styleColors} imgWidth={521} imgHeight={155} />
                        <StyleSheetItem title="Fonts" imgName="Styles-Font" imgSrc={styleFonts} imgWidth={513} imgHeight={354} />
                        <StyleSheetItem title="Icons" imgName="Styles-Icon" imgSrc={styleIcons} imgWidth={210} imgHeight={34} />
                        <StyleSheetItem title="Buttons" imgName="Styles-Button" imgSrc={styleButtons} imgWidth={498} imgHeight={155} />
                    </div>
                </section>
                <NormalSection 
                    title="???????????????" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            desc: "???????????? ????????? ????????? ??????????????? ???????????? ?????? ??? ??? ????????? ????????? ?????? ????????? ??????.",
                            imgSrc: workDesignBigpictureEnt,
                            imgTitle: "Mainpage"
                        }
                    ]}
                />
                <NormalSection 
                    title="???????????????" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            grid: {
                                column: 2,
                                tabletCol: 1,
                                gap: 60,
                                imgs: [ 
                                    { title: 'Subpages', src: sub01 },
                                    { title: 'Subpages', src: sub02 }
                                ]
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            subtitle: 'SVG ???????????????',
                            desc: '??????????????? ???????????? SVG??? ????????????, ????????? ?????? ????????? ??????????????? ?????????????????? ???????????? ??????????????? ???????????? ???????????????.',
                            svgComponent: <BigpictureLogoSVG />,
                            svgComponentDesc: '???????????? ????????? ????????????.'

                        }
                    ]}
                />
                <NormalSection 
                    title="???????????? ??????" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            subtitle: '??? ??????????????? ????????? ?????? ????????????',
                            desc: '?????? ??????????????? ????????????????????? ?????????TV??? ????????? ????????? ??????, ????????? ????????? ??? ?????? ??????????????? ?????????, ????????? ?????? ?????? ??????. ?????????????????? ????????????, ?????????????????? ?????????. ?????????????????? ?????? ?????????????????? ??????.',
                            grid: {
                                column: 2,
                                tabletCol: 1,
                                gap: 60,
                                imgs: [ 
                                    { title: 'Plugin', src: bevl05 },
                                    { title: 'Plugin', src: bevl00 }
                                ]
                            }
                        },
                        {
                            wrapper: 'l-wrapper',
                            subtitle: '??????????????????',
                            desc: '???????????? ????????? ??????????????? ???????????? ????????? / ????????? / ?????????TV ????????? ?????????, iframe?????? ???????????????.',
                            grid: {
                                column: 1,
                                gap: 60,
                                imgs: [ 
                                    { title: 'Plugin : Admin Page', src: bevl03 },
                                    { title: 'Plugin : Admin Page', src: bevl02 },
                                    { title: 'Plugin : Admin Page', src: bevl01 }
                                ]
                            }
                        },
                    ]}
                />
                <NormalSection 
                    title="????????? ???????????????" 
                    content={[
                        {
                            wrapper: 'l-wrapper',
                            desc: '???????????? ????????? ???????????? ?????????????????? ??????. ?????? ?????? ???????????? ???????????? ????????? ???????????? X???????????? ????????? ???????????? ????????? ?????? ?????????.',
                            imgSrc: bevl04,
                            imgTitle: "Video Lightbox"
                        }
                    ]}
                />
            </div>
        )
    }
}

export default BigpictureEnt;