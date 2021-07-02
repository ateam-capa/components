# @ateam-capa/component

이 패키지는 CAPA페이지 디자인의 일관성 및 통일성, 재사용성 재고를 위해 제작되었습니다.

<br>
<hr>
<br>

## 사용방법

- [NPM 바로가기](https://www.npmjs.com/package/@ateam-capa/components)

- [StoryBook 바로가기](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/)

<br>

1. 설치

```
npm i @ateam-capa/components
```

<br>

2. 적용

```js
import { Button, Input } from '@ateam-capa/components'
...

const someComponent = () => {
  return (
    <>
    <Input size="small" labelPlacement="left" inputLabel="example" />
    <Button color="default" size="medium" />
    </>
  )
}

```

<br>

3. 컴포넌트 props

[StoryBook](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/)에서 해당 컴포넌트 확인

<br>

<br>
<hr>
<br>

## 컴포넌트 추가

<br>

1. 만들고자 하는 컴포넌트 이름으로 브랜치를 생성합니다

```
 git checkout -b '브랜치이름'
```

<br>

2. src/CustomizedComponent 폴더에 추가하고자 하는 컴포넌트 파일을 생성합니다.
   <br>

3. src/CustomizedComponent/index.ts 파일에 해당 컴포넌트를 불러와 export 처리합니다.
   <br>

4. src/stories 에 해당 컴포넌트 이름으로 폴더를 생성하고, <u>'컴포넌트이름'.stories.tsx</u> 파일을 생성합니다.
   <br>

5. stories 파일에 다른 컴포넌트의 story를 참고해 해당 컴포넌트의 상태를 작성하고 저장합니다.
   <br>

6. git add, commit을 통해 변경사항을 커밋하고 push 한 후에 master 브랜치로 PR합니다.

<br>
<hr>
<br>

## 컴포넌트 / 레이아웃

<br>

거의 모든 페이지의 기초를 이루는 GlobalNavigationBar(GNB), Container, Footer는 레이아웃으로 따로 표기했으나, 사용상의 차이는 없습니다.

<br>
<hr>
<br>

컴포넌트의 자세한 사항은 [스토리북](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/)에서 확인할 수 있습니다.

## 레이아웃

- [GlobalNavigationBar](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-layout-globalnavigationbar--client)
- [Container](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-layout-container--padding-y-32)
- [Footer](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-layout-footer--default)
- [Footer(Mobile)](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-layout-footermobile--default)

<br>

## 컴포넌트

- [Button](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-button--contained)
- [Dialog](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-dialog--default)
- [Input](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-input--default)
- [Label](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-label--default)
- [Logo](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-logo--default)
- [NavigationBanner](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-navigationbanner--info-banner)
- [Notification](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-notification--default)
- [Select](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-select--default)
- [Tab](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-tab--default)
- [Tooltip](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-tooltip--default)
- [Typography](https://60dd57983e7bce003b03ce17-wgtzfxzulp.chromatic.com/?path=/story/capa-designsystem-component-typography--default)

<br>
