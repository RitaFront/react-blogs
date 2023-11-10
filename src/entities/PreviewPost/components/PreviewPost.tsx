import React from 'react';
import styles from './previewPost.module.scss';
import { BtnBase } from 'shared/ui/BtnBase';
import { Link, useNavigate } from 'react-router-dom';

interface IPreviewPost {
  id: string;
  avatar: string;
  userName: string;
  created: string;
  tags: string[];
  postImg: string;
  title: string;
  descr: string;
  comment: number;
}

interface IPreviewPostProps {
  post: IPreviewPost;
}

export const PreviewPost = ({ post }: IPreviewPostProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Link
            to={`/profile/${post.userName}`}
            className={styles.userProfile}
          >
            <img
              src={post.avatar}
              alt="avatar"
              className={styles.avatar}
            />
            <span className={styles.userName}>{post.userName}</span>
          </Link>
          <span className={styles.creation}>{post.created}</span>
        </div>
        <div className={styles.tags}>
          {post.tags.map((tag, index) => {
            return (
              <span className={styles.tag} key={index}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.content}>
        <img
          src={post.postImg}
          alt="imagePost"
          className={styles.img}
        />
        <div className={styles.contentInfo}>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.descr}>{post.descr}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.comment}>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>comment_line</title>
            <g
              id="页面-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Contact"
                transform="translate(-96.000000, 0.000000)"
                fillRule="nonzero"
              >
                <g
                  id="comment_line"
                  transform="translate(96.000000, 0.000000)"
                >
                  <path
                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                    id="MingCute"
                    fillRule="nonzero"
                  ></path>
                  <path
                    d="M16,4 C17.597725,4 18.903664,5.24892392 18.9949075,6.82372764 L19,7 L19,9 C20.597725,9 21.903664,10.2488774 21.9949075,11.8237227 L22,12 L22,16 C22,17.597725 20.7511226,18.903664 19.1762773,18.9949075 L19,19 L19,19.9662 C19,20.9852385 17.8571561,21.5597503 17.0455131,20.999252 L16.9498,20.9265 L14.6379,19 L11,19 C10.2325667,19 9.53238076,18.7117847 9.00183994,18.237721 L8.86143,18.1039 L7,19.5 C6.208912,20.09328 5.09351296,19.5752026 5.00554678,18.6214406 L5,18.5 L5,17 C3.40232321,17 2.09633941,15.7511226 2.00509271,14.1762773 L2,14 L2,7 C2,5.40232321 3.24892392,4.09633941 4.82372764,4.00509271 L5,4 L16,4 Z M19,11 L11,11 C10.4477,11 10,11.4477 10,12 L10,16 C10,16.5523 10.4477,17 11,17 L14.6379,17 C15.1058,17 15.5589,17.164 15.9183,17.4636 L17.0056,18.3696 C17.0717,17.6022 17.7155,17 18.5,17 L19,17 C19.5523,17 20,16.5523 20,16 L20,12 C20,11.4477 19.5523,11 19,11 Z M16,6 L5,6 C4.44772,6 4,6.44772 4,7 L4,14 C4,14.5523 4.44772,15 5,15 L5.5,15 C6.32843,15 7,15.6716 7,16.5 L7,17 L8.00968,16.2427 C8.00327,16.1627 8,16.0817 8,16 L8,12 C8,10.3431 9.34315,9 11,9 L17,9 L17,7 C17,6.44772 16.5523,6 16,6 Z"
                    id="形状"
                    fill="#09244B"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          {post.comment}
        </button>
        <BtnBase
          title="Подробнее"
          variant="outline-dark"
          maxWidth="250px"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
