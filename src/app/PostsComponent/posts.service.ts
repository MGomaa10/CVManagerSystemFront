import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/@shared/services';
import { Blogs } from '../PostsComponent/Models/Blogs.model';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpService) {}

  getAllBlogs() {
    return this.http.GET('Blogs');
  }

  getAllPagination(prameter: any) {
    return this.http.GET('Blogs/Get-All-With-Paginations', prameter);
  }

  addBlogs(blog: any) {
    return this.http.POST('Blogs', blog);
  }

  editBlogs(blog: any, id: any) {
    // let formdata = new FormData();
    // formdata.append('BlogDescription', blog?.blogDescription);
    // formdata.append('BlogEssay', blog.blogEssay);
    // formdata.append('BlogTitle', blog.blogTitle);
    return this.http.PUT('Blogs/' + id, blog);
  }

  deleteBlog(id: any) {
    return this.http.DELETE('Blogs/' + id);
  }

  getAllCounts() {
    return this.http.GET('Setting/GetCounts');
  }
}
