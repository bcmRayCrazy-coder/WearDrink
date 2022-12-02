import React, {Component} from 'react';
import {Text} from 'react-native';

import PageButton from '../components/PageButton';
import EssentialStyles from '../styles/essentialsStyle';

class App extends Component {
  render() {
    return (
      <>
        <Text style={EssentialStyles.text}>菜单</Text>
        <PageButton
          title="主页"
          img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABKJJREFUeF7tmV1oHFUUx8/ZNWKhSpNV/EDF6twZgz4IPigi0jwIKhURURFRCVbSmbspIn6giE0RqYoiUrKpRaSIiCj4UBFUCg2IiD4IPgjVTTEgVqqZO4kgCM3eI1vYOLs7c++d2ZnZpJk8Zs495/x/c865984ibPI/3OT6oQRQVsAmJzC0Fhg9eOIulPJeIFgBwKOCW18M410MBcBYo3k/AHwcFoySbvbr9ndFQygcQJT4jmjhWhVApCIhFApAJX4Nwrg1AhO4WhSEwgCYiO+IvmDLOVsWJ7f/WwSEQgAkEd8RPbL1/K2nHr3kn7wh5A5AKR7hQSBo93zXQOyIpmplWzB1zUqeEHIFoBJPiA8FrvVRW5zKbvXc82p/77pC5AUhNwBK8UAPB579YViUyn4E8eJTrvVnHhByAaAWD48EHvsgSoxqXaU6ctnS1FV/ZA0hcwAqEUj4mM+t91UilDOD8ErBrd+yhJApALV4mvS5fdgkeZWfVqt19cr0tb+a+DGxyQyA8s1JeFzU2XsmCXVsVP6qhOwvbi0k8RdnmwkAzT7/hPDYu2mSVVZUS477087xNH677iCDOlAPPDkVeM6hQWJoKut6UWc/DeJ/oArQbHVu4NkHB0nOpB3kqrxheY/zY9o4qQEoxRPwgLNG2qQSb5ESblyqsx/SxEsFQNmbAHXfY7NpktGtUcZFeZPvOt/rfPQ+TwxALR73+J51IGkSSeyVM6ECt4jd7Nsk/hIBUB9S6EnB7beTBE9rqxm8twWe87Wpb2MAavHwlODsLdOgWdgpj80IE0sumzeJYwRALV4+LbjzpkmwrG3U7Shv9z3nqC6mFoDmbP6M4NYbuiB5Ptd8b7hDuOxLVXwlAPVWR88F3H49T3GmvjXnkZ2BZ38e5ysWgGaffz7g7FXTBIuwU84EgHuWPHYkKo9IAJp9/gXfY/uLEJU0huY2ep/P7U+154DRuRM7keRnkbQIX/S59UrSxIq0T1oJfRVQazSPEMDdfUkTvSS4/XKRYtLGUkD4Rnjs1rDfLgAXvrN4qWydPtkvHmYEZ/vSJjSMdXEQJK5uX3bHFzs5dQHYdqC5o1KFY6YJC49pt1FTX4PYjTWaxj+nyRZMLE//f0gyq4CY7DYiAER5ue86v0dWQPuftcYvcwS42+SNbDgAiIeFa03GzoDOg9rcwmtE9KwOQhIAZ3qS5HU6n+3nUlbmw2WqW2PWAnRIYmt/uP/bfmN7+KLZBUsi3EnUqq0lgJW94WRMAYw2mscQYIdOSPg5AcwHHpswWdMHgOTawCasniQ8/VWv8NgWiAs4NvvzDKQAkHSw9sR/QHjsEx2EKACCOzO6dcoK6F2cFkDUOpPEztiQ3GciZGMBCJVnJIhwlZ2tAOLeal+1lADO0hYoKyBmQpct0LvVljOgnAHr6Bww19wLBF2nK5OjcJK+TmIbPkP0HYQQZoRr9v3C+D4/VgIoK6BsgXIG9AzB9p3d5GYX/hagW5PENnSn7/7WUNQQNBE/FJsSQEHb4FDerknQvCqAKNl3PZNc87BBhPnMD0J5JLoefBqfBNdDsnnkUALIg+pG8rnpK+A/1zAbbovMo40AAAAASUVORK5CYII="
        />
      </>
    );
  }
}

export default App;
