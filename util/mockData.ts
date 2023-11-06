// mockData.ts

import { blogList } from "../data";

  
  export const fetchForYouData = (): Promise<Article[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random()) {
          // Simulate a successful fetch
          resolve(blogList);
        }else{
            resolve([]);
        }
      }, 2000);
    });
  };
  
  export const fetchFollowingData = (): Promise<Article[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randNum = Math.random();
        
        if (randNum) {
          // Simulate a successful fetch
          resolve(blogList);
        }else{
            resolve([]);
        } 
      }, 2000);
    });
  };
  