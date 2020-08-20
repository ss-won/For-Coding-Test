from collections import defaultdict


def solution(phone_book):
    answer = True
    book = defaultdict(list)
    for num in phone_book:
        if(book[num[0]] == []):
            book[num[0]].append(num)
        else:
            for cd in book[num[0]]:
                if(len(cd) > len(num)):
                    size = len(num)
                    if(cd == num + cd[size:]):
                        return False
                else:
                    size = len(cd)
                    if(num == cd + num[size:]):
                        return False
    return answer
