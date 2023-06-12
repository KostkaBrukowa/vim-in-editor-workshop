import React from 'react'
import { Button, Type } from './mrc';
import style from './App.pcss';
import { i18n } from './i18n';

import * as styles from './App.styles.js'

export const CollapsedBatchEditSummary: React.FC<{
    title: string,
    tracker: any
    onStatusClick: () => {},
    onComplete: () => {},
}> = (props) => {
  const renderTitle = () => {
    return (
      <div className={styles.subTitleClassNames}>
        <div className={style.inline}>
          <Type h6 tag="h2" className={style.title}>
            {props.title}
          </Type>
          {renderSummary()}
        </div>
        <p className={styles.subTitleClassNames}>
          {i18n('Efekty zmian zobaczysz w swoim panelu najpóźniej w ciągu 15 minut')}
        </p>
      </div>
    );
  }

  const renderSummary =() => {
    const { tracker } = props;
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
            <span className={styles.failedClassNames}>
              {i18n('Niepowodzeń:')} {failed}
            </span>
          )}
        </div>
      </div>
    );
  }

  const renderButtons =() => {
    return (
      <div className={style.buttons}>
        <Button type="secondary" onClick={props.onStatusClick}>
          {i18n('Pokaż status')}
        </Button>
        <Button type="primary" onClick={props.onComplete}>
          {i18n('OK')}
        </Button>
      </div>
    );
  }

    return (
      <div className={styles.footerClassNames}>
        <div className={style.summary}>
          <div className={style.container}>
            {renderTitle()}
            {renderButtons()}
          </div>
        </div>
      </div>
    );
}

