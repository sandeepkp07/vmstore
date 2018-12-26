import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class MyfileProvider {
 public data:any;
  constructor(public http: HttpClient) {
    this.load();
    this.test();
  }
  load() {
        // console.log("vvvvvvvvvvvv")
        // if (this.data) {
        //   // already loaded data
        //   return Promise.resolve(this.data);
        // }
        // else{
        // // don't have the data yet
        return new Promise(resolve => {



        this.data= [
                      {
                        "butterfly": "https://i.imgur.com/n11nDOS.jpg",
                        "gondola": "https://upload.wikimedia.org/wikipedia/commons/9/93/Rialto_Bridge_Grand_Canal.jpg",
                        "princess": "https://www.pixelstalk.net/wp-content/uploads/2016/07/Princess-Wallpaper-HD-For-Desktop.jpg"
                        },
                        {
                        "butterfly": "https://i.imgur.com/n11nDOS.jpg",
                        "gondola": "https://upload.wikimedia.org/wikipedia/commons/9/93/Rialto_Bridge_Grand_Canal.jpg",
                        "princess": "https://www.pixelstalk.net/wp-content/uploads/2016/07/Princess-Wallpaper-HD-For-Desktop.jpg"
                        },
                        {
                        "butterfly": "https://i.imgur.com/n11nDOS.jpg",
                        "gondola": "https://upload.wikimedia.org/wikipedia/commons/9/93/Rialto_Bridge_Grand_Canal.jpg",
                        "princess": "https://www.pixelstalk.net/wp-content/uploads/2016/07/Princess-Wallpaper-HD-For-Desktop.jpg"
                        },
                        {
                        "butterfly": "https://i.imgur.com/n11nDOS.jpg",
                        "gondola": "https://upload.wikimedia.org/wikipedia/commons/9/93/Rialto_Bridge_Grand_Canal.jpg",
                        "princess": "https://www.pixelstalk.net/wp-content/uploads/2016/07/Princess-Wallpaper-HD-For-Desktop.jpg"
                      }
                   ];

          resolve(this.data);
        });
    }
    test(){
      return new Promise(resolve => {
        // this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot').subscribe(data => {
        //     console.log(data);
        // });
        this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot')
        // .map(res => res.json())
        .subscribe(data => {console.log(data);
      });

    });

}
}
// }
