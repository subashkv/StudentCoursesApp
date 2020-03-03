import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient:HttpClient) { }

  getCourseData(apiUrl) {
    return this.httpClient.get(apiUrl)
  }

  addCourseData(apiUrl, dataObject) {
    return this.httpClient.post(apiUrl, dataObject);
  }

  updateCourseData(apiUrl, dataObj) {
    return this.httpClient.put(apiUrl, dataObj)
  }

  deleteCourseData(apiUrl) {
    return this.httpClient.delete(apiUrl);
  }
}
