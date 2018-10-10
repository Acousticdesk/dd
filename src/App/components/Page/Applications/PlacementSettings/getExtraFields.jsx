import React from 'react';

import getOptions from './getOptions';

import Int from './Int';
import Boolean from './Boolean';
import List from './List';

export default (adUnitTypeSettings, onSettingsChange) => {
  const schema = adUnitTypeSettings && adUnitTypeSettings.schema;

  return (
    schema
      ? Object.entries(schema).map(([key, props]) => {
        const { label, options } = props;

        switch (props.type) {
          case 'int':
            return (
              <Int key={key} name={key} label={label} onSettingsChange={onSettingsChange} />
            );
          case 'boolean':
            return (
              <Boolean key={key} label={label} onSettingsChange={onSettingsChange} />
            );
          case 'select':
          case 'list':
            return (
              <List
                key={key}
                label={label}
                options={getOptions(options)}
                onSettingsChange={onSettingsChange}
              />
            );
          default:
            return null;
        }
      })
      : null
  );
};
