/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import addons from './addon-manifests';
import addonIdToEntry from './generated/addon-id-to-entry';
import SettingsStore from './settings-store-singleton';

// Import API to ensure that all the entries won't include their own copy
// TODO: this seems to be necessary in dev but might not be in prod
import './api';

for (const id of Object.keys(addons)) {
    if (!SettingsStore.getAddonEnabled(id)) {
        continue;
    }
    const fn = addonIdToEntry[id];
    fn();
}
