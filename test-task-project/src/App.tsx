import { useState, Component } from 'react'
import classNames from 'clsx'
import { selectors } from './selectors'
import { Button, Type } from './mrc';
import style from './App.pcss';
import { i18n } from './i18n';

/*
* 1. Zamienić komponent klasowy na funkcyjny
* 2. Zamienić propsTypes na interface
* 3. Wynieść style do osobnego pliku
* 4. Poprawić wszystkie błędy
* */


const failedClassNames = classNames(selectors.mColorRed);

const footerClassNames = classNames(
  selectors.mDisplayFlex,
  selectors.mFlexJustifyBetween,
  selectors.mFlexDirectionColumnReverse,
  selectors.mFlexDirectionRowReverseMd,
);

const subTitleClassNames = selectors.mMarginBottom0;

export class CollapsedBatchEditSummary extends Component {
  static propTypes = {
    title: PropTypes.string,
    tracker: PropTypes.instanceOf(Object),
    onStatusClick: PropTypes.func,
    onComplete: PropTypes.func,
  };

  renderTitle() {
    return (
      <div className={subTitleClassNames}>
        <div className={style.inline}>
          <Type h6 tag="h2" className={style.title}>
            {this.props.title}
          </Type>
          {this.renderSummary()}
        </div>
        <p className={subTitleClassNames}>
          {i18n('Efekty zmian zobaczysz w swoim panelu najpóźniej w ciągu 15 minut')}
        </p>
      </div>
    );
  }

  renderSummary() {
    const { tracker } = this.props;
    const { failed, succeed } = tracker.countEntitiesByStatus();

    return (
      <div>
        <div>
          {succeed && (
            <span>
              {i18n('Powodzeń:')} {succeed},{' '}
            </span>
          )}
          {failed && (
            <span className={failedClassNames}>
              {i18n('Niepowodzeń:')} {failed}
            </span>
          )}
        </div>
      </div>
    );
  }

  renderButtons() {
    return (
      <div className={style.buttons}>
        <Button type="secondary" onClick={this.props.onStatusClick}>
          {i18n('Pokaż status')}
        </Button>
        <Button type="primary" onClick={this.props.onComplete}>
          {i18n('OK')}
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div className={footerClassNames}>
        <div className={style.summary}>
          <div className={style.container}>
            {this.renderTitle()}
            {this.renderButtons()}
          </div>
        </div>
      </div>
    );
  }
}
