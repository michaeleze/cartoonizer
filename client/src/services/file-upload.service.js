import http from "../http-common";
import axios from "axios";

class FileUploadService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file",
                    file,
                    file.name);
    
    const requestOptions = {

      method: "POST",
      body: formData
    }

    fetch("http://0.0.0.0:8080/decolorize", requestOptions)
    .then(response => response.json())
    .then(function(response){
      console.log(response)
    })
    
    return {"Learning": "Good"};

    // return http.post("/upload", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   onUploadProgress,
    // });
  }

  // getFiles() {
  //   return http.get("/files");
  // }
}

export default new FileUploadService();