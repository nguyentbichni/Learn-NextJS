import React from 'react';
import styles from'../Header/header.module.css'

function Header(){
    return (  
            <div className={styles.tmp_header}>
               <div className="container">
                    <div className={styles.tmp_hlogo}>
                        <h1><span>栃木県</span></h1>
                    </div>
                    <div className={styles.tmp_setting_wrap}>
                        <div className={styles.tmp_mean}>
                                <div className={styles.group_setting}>
                                    <div className={styles.tmp_setting}>
                                        <ul className={styles.setting_list}>
                                            <li className={styles.setting_general}>
                                                <a href="/cms8341/#">閲覧補助</a>
                                            </li>
                                            <li className={styles.setting_language}>
                                                <a href="/cms8341/#">
                                                    <span className={styles.language_label}>
                                                        Foreign Language
                                                    </span>
                                                    <span className={styles.language_all}>（がいこくじんのみなさんへ）</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.tmp_search}>
                                        <form className={styles.tmp_gsearch} action="/search/result.html" name="tmp_gsearch">
                                            <div className={styles.wrap_sch_box}>
                                                <p className={styles.sch_ttl}><label htmlFor="tmp_query">サイト内検索</label></p>
                                                <p className={styles.sch_box}><input type="text" size="31" name="q" className={styles.tmp_query}/></p>
                                            </div>
                                            <div className={styles.wrap_sch_btn}>
                                                <p className={styles.sch_select}></p>
                                                <p className={styles.sch_btn}>
                                                    <input type="submit" name="sa" value="検索" className={styles.tmp_sma_func_sch_btn}/>
                                                </p>
                                                <p className={styles.tmp_search_hidden}>
                                                    <input type="hidden" name="cx" value="006317087180884836016:c-iuyduhxj8" />
                                                    <input type="hidden" name="ie" value="UTF-8" />
                                                    <input type="hidden" name="cof" value="FORID:9" />
                                                </p>
                                            </div>
                                        </form>
                                        <p className={styles.view_btn}>
                                            <a href="#"></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <ul className={styles.tmp_header_btn}>
                            <li className={styles.tmp_navi_notice}>
                                <a href="javascript:void(0);">重要な<br/>お知らせ</a>
                            </li>
                            <li className={styles.tmp_hnavi_disaster}>
                                <a href="/cms8341/#">防災・<br/>災害情報</a>
                            </li>
                            <li className={styles.tmp_hnavi_medical}><a href="/cms8341/#">医療情報</a></li>
                            <li className={styles.tmp_hnavi_organize}><a href="/cms8341/#">組織から探す</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
export default Header;