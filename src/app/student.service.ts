import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudentData(apiUrl) {
    return this.httpClient.get(apiUrl)
  }

  addStudentData(apiUrl, dataObject) {
    return this.httpClient.post(apiUrl, dataObject);
  }

  updateStudentData(apiUrl, dataObj) {
    return this.httpClient.put(apiUrl, dataObj)
  }

  deleteStudentData(apiUrl) {
    return this.httpClient.delete(apiUrl);
  }
}
