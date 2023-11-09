import styled from "styled-components";
import CameraIcon from '../assets/images/camera.svg'
import VideoIcon from '../assets/images/video.svg'
import EventIcon from '../assets/images/event.svg'
import WriteIcon from '../assets/images/write.svg'
import UserIcon from '../assets/images/user.svg'
import Ellipsis from '../assets/images/ellipsis.svg'
import SharedImage from '../assets/images/shared-image.jpg'
import LikeIcon from '../assets/images/like.svg'
import DislikeIcon from '../assets/images/dislike.svg'
import ShareIcon from '../assets/images/share.svg'
import CommentIcon from '../assets/images/comment.svg'
import PostModal from './PostModal'

import { useState } from "react";

const Main = () => {

  const [showModal, setshowModal] = useState('close');

  const handleClick = (e) => {
    e.preventDefault();
    if(e.target != e.currentTarget) {
      return;
    }

    switch(showModal) {
      case 'open':
        setshowModal('close');
        break;
      case 'close':
        setshowModal('open');
        break;
      default:
        setshowModal('close');
        break;
    }
  }

  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <button onClick={handleClick}> Start a post</button>
        </div>

        <div>
          <button>
            <img src={CameraIcon} alt="" />
            <span>photo</span>
          </button>

          <button>
            <img src={VideoIcon} alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src={EventIcon} alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src={WriteIcon} alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <Content>
        <Article>
          <SharedActor>
            <a>
              <img src={UserIcon} alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src={Ellipsis} alt="" />
            </button>
          </SharedActor>
          <Discription>Description</Discription>
          <SharedImg>
            <a>
              <img src={SharedImage} alt="" />
            </a>
          </SharedImg>
          <SocialCount>
            <li>
              <button>
                <img src={LikeIcon} alt="" />
                <span>56</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCount>
          <SocialAction>
            <button>
              <img src={LikeIcon} alt="" />
              <span>like</span>
            </button>
            <button>
              <img src={DislikeIcon} alt="" />
              <span>Dislike</span>
            </button>
            <button>
              <img src={ShareIcon} alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src={CommentIcon} alt="" />
              <span>Comment</span>
            </button>
          </SocialAction>
        </Article>
      </Content>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  possition: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 1px rgba(0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  diaply: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0 0 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      padding-top: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px 0;
  overflow: visible;
`;

const SharedActor = styled.div`
 paddinh-right=40px;
 flex-wrap:nowrap;
 padding:12px 16px 0;
 margin-bottom:8px;
 align-items:center;
 display:flex;
 a{
   margin-right:12px;
   flex-grow:1;
   overflow:hidden;
   display:flex;
   text-decoration:none;
   img{
     width:48px;
     height:48px;
   }
   & > div{
     display:flex;
     flex-direction:column;
     flex-grow:1;
     flex-basis:0;
     margin-left:8px;
     overflow:hidden;
     span{
       text-align:left;
       &:first-child{
         font-size:14px;
         font-weight:700;
         color: rgba(0, 0, 0, 1);
       }
       &:nth-child(n +1){
          font-size:12px;
          color: rgba(0, 0, 0, 0.6);
       }
     }
   }
 }
 button{
   possition:absolute;
   right: 12px;
   top:0;
   background:transparent;
   border:none;
   outline: none;
   
   img{
     width:20px;
     height:20px;
     padding-bottom: 20px;
     
   }
 }
`;

const Discription = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    width: 100%;
  }
`;


const SocialCount = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  Button {
    align-items: center;
    background-color: transparent;
    border: none;
  }
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
    img {
      width: 20px;
    }
  }
`;

const SocialAction = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0;
  min-height: 40px;
  padding: 4px 70px 8px 9px;

  button {
    display: inline-flex;
    align-items: center;
    color: #0a66c2;
    width: 30px; /* Adjust the width to make the icons smaller */
    height: 30px; /* Adjust the height to make the icons smaller */
    background-color: transparent;
    border: none;

    img {
      width: 20px;
      height: 20px;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
      a {
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

export default Main;