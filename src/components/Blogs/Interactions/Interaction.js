import style from './Interaction.module.css'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from '@mui/icons-material/Comment';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
export const Interaction = (props) => {
  return (
    <div className={style.icons}>
      <div>
        <FavoriteBorderIcon />
      </div>
      <div>
        <QuestionAnswerOutlinedIcon />
      </div>
      <div>
        <ShareOutlinedIcon />
      </div>
      <div>
        <BookmarkBorderOutlinedIcon />
      </div>
    </div>
  );
};
