import { useState, useRef, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import getClient from '../config/supabaseClient.js';
import styles from '../assets/styles/PostQuestion.module.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// interface answerModalProps {
//   open: boolean;
//   onClose: () => void;
// }

export default function AddAnswerModal ({ openState, handleFunction }) {
    // const { setModalOpen } = props;
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
  
    return (
      <Modal
      open={openState}
      onClose={handleFunction}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
        <p>Hello</p>
      </Modal>
    )

    // return (
    //   <div>
    //     {/* <Button onClick={handleOpen}>Open modal</Button> */}
    //     <Modal
    //       open={open}
    //       onClose={handleClose}
    //     //   aria-labelledby="modal-modal-title"
    //     //   aria-describedby="modal-modal-description"
    //     >
    //       <Box>
    //         <Typography id="modal-modal-title" variant="h6" component="h2">
    //           Text in a modal
    //         </Typography>
    //         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //           Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //         </Typography>
    //       </Box>
    //     </Modal>
    //   </div>
    // );
  }


// export default function QuestionComponent({ session, onRequestUpdate }) {
//   const supabase = getClient();
  
//   const [loading, setLoading] = useState(false);
//   const [postedAnswer, setPostedAnswer] = useState('');


//   async function postAnswer() {
//     try {
//       setLoading(true);

//       const updates = {
//         question: postedAnswer,
//         user_id: session.user.id,
//       };

//       console.log({ updates });

//       let { error } = await supabase.from('posts').insert([updates]);
//       if (error) throw error;
//       alert('Question Posted!');
//       onRequestUpdate(); //fetch everything
//     } catch (error) {
//       alert('Error posting your question!');
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }

// return (
//   <Modal>


//     <div className={styles.postQuestionContainer}>
//       <form className={styles.questionForm}>
//         <h1>Post An Answer</h1>
//           <label className={styles.questionLabel}
//           htmlFor='question'>
//             Question
//           </label>
//           <textarea className={styles.questionInput}
//             id='question'
//             // type='text'
//             value={postedAnswer || ''}
//             onChange={(e) => setPostedAnswer(e.target.value)}
//           />
//         <button
//           type='button'
//           className={styles.postQuestionButton}
//           onClick={() => {
//             postAnswer();
//           }}
//           disabled={loading || !postedAnswer}
//         >
//           {loading ? 'Loading ...' : 'Post Question'}
//         </button>
//       </form>
//     </div>
//   </Modal>
//   );
// }