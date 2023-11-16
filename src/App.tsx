import { MapComponent } from './Map';

export function App() {
  return (
    <div class="content">
      <div class="header">
        <h2>Simple Solid JS / OpenLayers example</h2>
        <div class="logos">
          <a href="https://openlayers.org">
            <img
              src="https://openlayers.org/theme/img/logo-light.svg"
              height="35px"
            />
          </a>
          <a href="https://www.solidjs.com">
            <img
              src="https://www.solidjs.com/assets/logo-123b04bc.svg"
              height="35px"
            />
          </a>
        </div>
      </div>
      <MapComponent />
      <div>
        <p>
          This is a simple implementation of solidjs with OpenLayers. Compared
          with React, OpenLayers is much easier to implement in Solidjs.
        </p>
        <b>References:</b>
        <ul>
          <li>
            <a href="https://openlayers.org/en/latest/examples/simple.html">
              OpenLayers
            </a>
          </li>
          <li>
            <a href="https://www.solidjs.com/docs/latest">Solid JS</a>
          </li>
        </ul>
        <hr />
        <p>
          For paid consulting support for more complex mapping applications,
          please reach out to
          <a href="https://austererisk.com/contact">
            {' '}
            austererisk.com/contact
          </a>{' '}
          for a no-obligation chat. .
        </p>
        <img
          src="https://austererisk.com/logo.png"
          height="25px"
          alt="Austere Risk Pty Ltd"
        />
      </div>
    </div>
  );
}
