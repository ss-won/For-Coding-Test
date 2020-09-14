#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;

int main()
{
  int tc = 0;
  int N = 0;
  int inp = 0;
  double res = 0;
  cin >> tc;

  for (int i = 0; i < tc; i++)
  {
    vector<int> sc;
    double m = 0;
    cin >> N;
    //점수입력 및 총합계산
    for (int j = 0; j < N; j++)
    {
      cin >> inp;
      sc.push_back(inp);
      m += inp;
    }
    sort(sc.begin(), sc.end());

    m = m / N;

    int p = 0;
    while (p < N)
    {
      if (sc[p] > m)
        break;
      p++;
    }

    res = round((N - p) * pow(10, 5) / N) / pow(10, 3);

    cout << fixed;
    cout.precision(3);
    cout << res << "%" << endl;
  }
}