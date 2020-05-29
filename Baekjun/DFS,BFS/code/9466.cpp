//
//  9466.cpp
//  CodingTest
//
//  Created by sowon on 02/05/2020.
//  Copyright © 2020 sowon. All rights reserved.
//

#include <iostream>
#include <vector>
#include <algorithm>
#include <cstring>
#include <cstdio>
using namespace std;
int student[100001];
bool visited[100001];
bool recur[100001];
int cn = 0;
void dfs(int v){
    //@ 노-가-다 버전에서 중복된 방문 상쇄시켜버린 경우
    visited[v] = true;
    int next = student[v];
    if(visited[next]){
        if(!recur[next]){
       // cout<<"start recur about "<<v<<endl;
        for(int i=next;i!=v;i=student[i]) cn++;
           // cout<<"current recur "<<i<<endl;
        //cout<<"end recur about "<<v<<endl;
        cn++;
        }
    }
    else dfs(next);
    recur[v] = true;
    
    /*
     @모든 경우의 수를 다 해보기(노-가-다)방식
    //첫방문
    if(!visited[v]&&!recur[v]){
        //@Test
        //cout<<"visit "<<v<<endl;
        visited[v] = true;
        mid = dfs(student[v],f);
        if(visited[v]&&!recur[v]){
            return mid+1;
        }
    }
    //재방문
    else if(visited[v]&&!recur[v]){
        recur[v] = true;
        //@Test
        //cout<<"recur "<<v<<endl;
        mid = dfs(student[v],f);
        if(visited[v]&&!recur[v]){
            return mid+1;
        }
    }
    //이미 방문됨
    return mid;
     */
}

int main(){
    int T = 0;//test_case
    cin>>T;
    
    while(T--){
        int S = 0;//학생수
        cin>>S;
        
        /* 초 기 화 두 둥*/
        memset(student,0,sizeof(student));
        memset(visited, false, sizeof(visited));
        memset(recur, false, sizeof(recur));
        cn = 0;
        
        //학생들 인접 리스트 넣기(방향그래프라, 단방향으로만)
        for(int i=1;i<=S;i++){
            cin>>student[i];
        }
        
        //dfs(or bfs) 돌리기
        for(int i=1;i<=S;i++){
            if(!visited[i]) dfs(student[i]);
        }
        
        cout<<S-cn<<endl;
        
    }
    
    return 0;
}
