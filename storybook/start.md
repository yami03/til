# Storybook 

### StroryBook 왜 필요할까?

* 재사용 가능한 컴포넌트의 문서



### Storybook v5.2 부터는 Component Story Format (CSF) 형식 권장

**storiesOf API **

```tsx
storiesOf('opt-components', module)
  .addDecorator(withOPTComponentsStorybookGlobalStyle)
  .addDecorator(withInsightViewerStorybookGlobalStyle)
  .add('<DialogPaper>', () => <DialogPaperSample />);
```

**CSF형식**

```tsx
export default {
  title: 'opt-components',
  component: DialogPaper,
  decorators: [
   withOPTComponentsStorybookGlobalStyle,    	   
   withInsightViewerStorybookGlobalStyle
  ],
};
```

확실히 CSF가 직관적이다.
storiesOf API는 체인으로 연결되어서 🙄 첨엔 어색하고 Jquery인가?ㅁ? 



**참고**

*  https://velog.io/@velopert/start-storybook
* https://storybook.js.org/docs/formats/component-story-format/
* https://medium.com/storybookjs/component-story-format-66f4c32366df