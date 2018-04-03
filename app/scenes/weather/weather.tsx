import * as React from "react";
import {observer} from 'mobx-react';
import {AppState} from '../../store/Store';
import AutoComplete from 'material-ui/AutoComplete';


const dataSourceConfig = {
  text: 'name',
  value: 'id',
};

@observer
export class WeatherForecast extends React.Component<{state: AppState}, {}> {

  render() {
    return (
      <div>
      <AutoComplete
          hintText="Type anything"
          dataSource={this.props.state.entriesList}
          onUpdateInput={value => this.props.state.updateSearchInputVal(value)}
          dataSourceConfig={dataSourceConfig}
          onNewRequest={(value, idx) => this.props.state.fetchWeather(value.id)} //
      />

      </div>
      
    )
  }
  componentDidMount() {
    this.props.state.fetchCities();
  }
}