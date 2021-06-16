import React from 'react';
import Link from 'next/link';
import styles from'./gnavi.module.css';

function Gnavi(){
    return (
        <div className={styles.tmp_gnavi}>
            <div className="container">
                <div className={styles.gnavi}>
                    <ul>
                        <li className="glist1">
                            <Link href="/">
                                <a>防災・安t全</a>
                            </Link>
                        </li>
                        <li className="glist2">
                            <Link href="/Details">
                                <a href="/cms8341/#">くらし・環境</a>
                            </Link>
                        </li>
                        <li className="glist3">
                            <Link href="/Products">
                                <a href="/cms8341/#">子育て・福祉・医療</a>
                            </Link>
                        </li>
                        <li className="glist4"><a href="/cms8341/#">教育・文化</a></li>
                        <li className="glist5"><a href="/cms8341/#">社会基盤</a></li>
                        <li className="glist6"><a href="/cms8341/#">産業・しごと</a></li>
                        <li className="glist6"><a href="/cms8341/#">県政情報</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Gnavi;