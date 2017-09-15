# react-relay-github
1. git clone https://github.com/AshoneA/react-relay-github;
2. cd react-relay-github && npm install;
3. 修改src/config.js 里的token 字段，填入你的token;
4. npm start

## profile
这里展示的是我的个人信息,分别为个人拥有的项目、star的项目和watching的项目,数字代表的的是项目的总和，列表中的项目分别为前10个项目，你可以点击项目名查看改项目的提交历史。

## commit history
点击左侧默认进入facebook/react的commit记录，因为这个项目的commit记录比较多，所以默认就用了react的项目，也可以输入commit/:owner/:name来查看任意项目的提交记录，点击下方的load more加载更多的项目。

## issues
点击左侧的issues默认进入的是此项目的issue的列表，点击下方的load more加载更多的项目，可以点击issue的title查看该issus更详细的信息，在下方输入内容之后点击comment可以发表对该issus的讨论，点击每个讨论的右侧删除按钮，可以删除改issue，(因为在github graphl api里面没找到删除comment的，所以这里删除使用的是github v3的api),

## charts
这个图表关注的重点是语言。
点击左侧charts默认（chart/primary/:login可以选择任意用户）进入我的关注的项目（前100个）使用的主要语言pei图，你可以点击一个语言种类，查看该语言下面的star数量排行，再次点击某个项目，你可以查看该项目的pull request最近50个的提交作者（也可以通过chart/:owner/:name选择某个项目），点击作者，下方可以显示出该作者的仓库中前50个项目的主要语言占比。


