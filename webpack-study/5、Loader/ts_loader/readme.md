<h2>TS-LOADER���ü���</h2>

<h3>ǰע��</h3>

�ĵ�ȫ����鿴 [��Ŀ¼���ĵ�˵��](https://github.com/qq20004604/webpack-study)��

������ԣ��������Ŀ�ӡ�Star���͡�Fork��������ע��

��������[�������](https://github.com/qq20004604/webpack-study/issues)������Issues����

[DEMO](https://github.com/qq20004604/webpack-study/tree/master/5%E3%80%81Loader/ts_loader)��ַ

<h3>0��ʹ��˵��</h3>

��װ��

```
npm install
```

���У�

```
npm run dev
```

�����

```
npm run build
```

<h3>1��TypeScript����</h3>

>��װ

�����windows�£�Ϊ������ʹ��tsc����������ȫ�ְ�װһ��ts

```
npm install --save-dev --g typescript
```

����Ҫȫ�ְ�װ�Ļ���ȥ�� ``--g`` ������

```
npm install --save-dev typescript
```

>���� tsconfig.json

```
tsc --init
```

[��������ļ���˵����Ӣ�İ棩](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

Ҳ����ֱ�ӿ����ļ�ÿ�е�ע�͡�

> ת��ָ���ļ�

tsc �ļ������·���������ִ�� tsc �����·����

ʾ����

```
tsc src/app.ts
```

���Զ����� ``src/app.js`` �ļ���


> webpack �� ts

��װ loader ����Ϊ�� ``.ts`` ��β���ļ���

```
npm install ts-loader
```

ע�⣬webpack��ʹ�� ts��Ҳ����ȻҪ��װ ts �ġ�

```
npm install typescript
```

ע��

1. ֻ��Ҫ��װ ts-loader �� typescript��
2. Ȼ���� ``webpack.config.js`` ����һ�� loader��
3. �Ϳ����� webpack ��ʹ�� ts �ˣ�
4. ���ر� DEMO ����ֱ�Ӳ鿴Ч����

> ts ��� react

����������� webpack �Ļ����Ͻ��н�һ�������á�

���ȳ��˰�װreact��react-dom�⣬���ð�װ ts �汾�� react �� react-dom�����������һ����﷨����ʮ�а˾ž�����������ˣ�

```
npm install @types/react
npm install @types/react-dom
```

Ȼ��� ``tsconfig.json``���������ã�

[TypeScript�����ļ�tsconfig����.md](https://github.com/hstarorg/HstarDoc/blob/master/%E5%89%8D%E7%AB%AF%E7%9B%B8%E5%85%B3/TypeScript%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6tsconfig%E7%AE%80%E6%9E%90.md)

```
"sourceMap": true,
"noImplicitAny": true,
"module": "commonjs",
"target": "es5",
"jsx": "react",
"allowSyntheticDefaultImports": true
```

>�� ts �﷨дreact

```
// ���ǽӿ�
interface ChildDemoProps {
    // ����Ǻ�������Ҫ������������ʽд�ӿڣ�
    // ������ص� DOM ��һ�� input����Ҫ�� HTMLInputElement ����
    getInput: (DOM: HTMLInputElement) => void;
}

interface ChildDemoState {
    value: string;
}

/* ����<>��
 * ��һ�������� props �Ľӿ��������ڶ����� state �Ľӿ�����
 * ���ȱ��������ᵼ��ts����
 * ���û�б��� state����ô��λ���� {} ���
  * */
class ChildDemo extends React.Component<ChildDemoProps, ChildDemoState> {
    constructor(props: any) {
        super(props)
        this.state = {
            value: '123'
        }
    }

    render() {
        return <div>
            <p>{this.state.value}</p>
            <input type="text" ref={this.props.getInput}/>
        </div>
    }
}

class RefsDemo extends React.Component {
    myInput: HTMLInputElement;

    render() {
        return <div>
            {/* ��Ϊ�����򵥣�����ֱ��д�������ͷ�����Դ���this������ʱ�������� */}
            <ChildDemo getInput={this.getInput.bind(this)}/>
        </div>
    }

    // ����һ������������������ HTMLInputElement Ҳ������ HTMLElement����������ͳһһ��
    getInput(DOM: HTMLInputElement): void {
        this.myInput = DOM
    }
}
```


<h3>�������壺</h3>

<h4>1���������</h4>

�������ѹ�������ͨ�����²���� ``webpack.config.js`` ����С���� react ��������

```
new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': '"production"'
    }
})
```

ѹ���Ƚϣ�React + React-dom����

1. ��ȫ��ѹ�����ӽ� 800 KB��
2. ����������Ĳ��ԣ�������ѹ����280 KB +��
3. ��2�� + �������ֵ����Ϊ��``"development"``��187 KB��
4. ��2�� + �������ֵ����Ϊ��``"production"``������ 110 KB��


