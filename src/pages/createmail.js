import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Banner from '../components/banner';
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet"


const useStyles = makeStyles({
  emailToCopyTo: {
    width: '80%',
    marginBottom: '5%',
    fontColor: '#007bff',
  },

  emailFieldLabel: {
    color: '#007bff',
    float: 'left',
    marginLeft: '10%',
    fontWeight: 'bold',
  },

});



function CreateMail() {



  const classes = useStyles();

  const [fileOk, setFileOk] = React.useState(false);


  let filevalidation = () => {
    const fi = document.getElementById('file');

    // Check if any file is selected. 
    if (fi.files.length > 0) {
      for (let i = 0; i <= fi.files.length - 1; i++) {

        const fsize = fi.files.item(i).size;
        const file = Math.round((fsize / 1024));
        // The size of the file. 
        if (file >= 1024 * 20) {
          setFileOk(false);
          alert(
            "File too Big, please select a file less than 20mb");

        } else {

          alert('File size ok, proceed');
          if ((window.document.getElementById('subject').value.length === 0)) {
            setFileOk(false);
          } else {
            setFileOk(true);
          }


        }
      }
    }
  }

  let meowSender = (e) => {
    e.preventDefault();
    if ((document.getElementById('subject').value.length === 0) || (document.getElementById('password').value.length === 0)) {
      alert('you need to complete the required fields, please');
      setFileOk(false);
    } else {
      setFileOk(true);

      var formdata = new FormData();

      formdata.append("subject", document.getElementById('subject').value);
      formdata.append("password", document.getElementById('password').value);

      var requestOptions = {
        method: 'POST',
        body: formdata,
      };

      fetch(`${process.env.REACT_APP_DCL_BACKEND}/files/file`, requestOptions)
        .then(response => response.json())
        .then(result => {

          console.log({ result })
          return alert(result.message)

        })
        .catch(error => console.log('error', error));

    }

  }




  return (
    <div>
      <Helmet>
        <title>{`DCL UPLOAD PAGE`}</title>
      </Helmet>

      <Banner />
      <Container fixed style={{ padding: 'auto' }}>
        <form id='formDetails'>
          <div><h3 style={{ color: "#007bff" }}>UPLOAD NEW EDITION</h3></div>
          <span className={classes.emailFieldLabel}>Enter The File Name of This Edition </span><TextField required id='subject' label="Edition Subject" variant="outlined" className={classes.emailToCopyTo} />
          <span className={classes.emailFieldLabel}>Enter Your ID Number </span><TextField required type='password' id='password' autofocus label="ID Number" variant="outlined" className={classes.emailToCopyTo} />

          {/*<!--span className={classes.emailFieldLabel}>What is This Mail/File About? - <i>required</i></span->
    <TextField required onMouseOut={filevalidation} multiline id="description" label="Describe the Mail" variant="outlined" rows={10} className={classes.emailToCopyTo} rowsMax={Infinity} placeholder="Describe the file and reason why people should copy it here. This should be your cover letter if it is a CV/Resume you are attaching" />*/}
          {/*<Button

            variant="contained"
            component="label"
            className={classes.emailToCopyTo}
            onChange={filevalidation}
          >
            <input
              type="file"
              id="file"
              name="attachment"
              required
              accept='.pdf, .mkv, .mp3, .mp4, .DOC, .DOCX, .HTML, .HTM, .XLS, .XLSX, .PPT, .PPTX, .jpeg, .jpg, .bmp, .png, .TXT'
            />

          </Button><br />*/}

          {1 && (<Button className={classes.emailToCopyTo} onClick={meowSender} variant="contained" color="primary" type="submit" ><span id="submit">PUBLISH NOW!</span></Button>)}
        </form>

      </Container>
    </div>
  )
}

export default CreateMail