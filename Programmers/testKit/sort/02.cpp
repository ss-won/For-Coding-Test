#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
bool compare(int a, int b){
    string sa = to_string(a);
    string sb = to_string(b);
    if(stoi(sa+sb) > stoi(sb+sa))
        return true;
    else
        return false;
}

string solution(vector<int> numbers) {
    string answer = "";
    int i=0;
    if(numbers.size() == 0) return answer;
    for(;i<numbers.size();i++){
        if(numbers[i] != 0)
            break;
    }
    if(i == numbers.size())
        return answer = "0";
    sort(numbers.begin(), numbers.end(), compare);
    for(int i=0;i<numbers.size();i++){
        answer += to_string(numbers[i]);
    }
    return answer;
}