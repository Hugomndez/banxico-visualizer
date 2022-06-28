import { useContext, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { ChartsLoader } from '../../components';
import { FetchContext } from '../../contexts';

import styles from './Charts.module.css';

const Charts = () => {
  const { status, data } = useContext(FetchContext);
  const [chartType, setchartType] = useState('Line');

  const ChartFormat = dataset => {
    let parsed = {};
    parsed.labels = dataset.map(item => item.fecha);
    parsed.datasets = [
      {
        data: dataset.map(item => Number(item.dato)),
        borderColor: 'rgb(17, 71, 217)',
        backgroundColor: 'rgb(17, 71, 217)',
        pointRadius: 0,
      },
    ];
    return parsed;
  };

  const saveChart = async item => {
    const saveAs = (await import('file-saver')).default;
    const itemChart = document.getElementById(item);
    itemChart.toBlob(blob => {
      saveAs(blob, `Series-${item}.jpg`);
    });
  };

  return (
    <section className={styles.section}>
      {status === 'idle' && <p>Handle empty chart</p>}
      {status === 'fetching' && <ChartsLoader title={status} />}
      {status === 'fetched' && (
        <>
          <h2>Fetch Results:</h2>
          <div>
            <button
              type='button'
              className={styles.itemButton}
              onClick={() => {
                setchartType('Line');
              }}
            >
              Line Chart
            </button>
            <button
              type='button'
              className={styles.itemButton}
              onClick={() => {
                setchartType('Bar');
              }}
            >
              Bar Chart
            </button>
          </div>
          <div className={styles.resultsWrapper}>
            {data.bmx.series.map(item => (
              <div key={item.idSerie} className={styles.item}>
                <p className={styles.itemId}>{item.idSerie}</p>
                <span>--</span>
                <p className={styles.itemTitle}>{item.titulo}</p>
                <div className={styles.itemChart}>
                  {chartType === 'Line' && (
                    <Line
                      id={item.idSerie}
                      options={{
                        responsive: true,
                        plugins: { legend: { display: false } },
                      }}
                      data={ChartFormat(item.datos)}
                    />
                  )}
                  {chartType === 'Bar' && (
                    <Bar
                      id={item.idSerie}
                      options={{
                        responsive: true,
                        plugins: { legend: { display: false } },
                      }}
                      data={ChartFormat(item.datos)}
                    />
                  )}
                </div>
                <button
                  type='button'
                  className={styles.itemButton}
                  onClick={() => {
                    saveChart(item.idSerie);
                  }}
                >
                  Download Chart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Charts;
