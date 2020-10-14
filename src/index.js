import { addNoResultsMessage } from './EntityLists';
import { homepageRedirect, hideToggleButton } from './Generic';
import { genericSidebar, toggleDropdown, toggleSidebar } from './Sidebar';
import { multiselectField } from './WebForms';
import './css/index.css';

const CRM_TOOLS = {
  addNoResultsMessage: () => addNoResultsMessage(),
  homepageRedirect: () => homepageRedirect(),
  hideToggleButton: () => hideToggleButton(),
  genericSidebar: () => genericSidebar(),
  toggleDropdown: (event) => toggleDropdown(event),
  toggleSidebar: (change_token = true) => toggleSidebar(change_token),
  multiselectField: (custom_id, select_options, label, edit) => multiselectField(custom_id, select_options, label, edit)
};

class OrfiumSupportCRM {
  static logAvailableTools() {
    console.log(Object.keys(CRM_TOOLS));
  }

  static applyTool(toolName) {
    const toolExistsInList = Object.keys(CRM_TOOLS).some((name) => name === toolName);
    const crmTool = CRM_TOOLS[toolName];

    if (!toolExistsInList) {
      throw new Error('No tool exists with name: ' + toolName);
    }

    return crmTool;
  }
}

Object.defineProperty(window, 'OrfiumSupportCRM', {
  value: OrfiumSupportCRM,
  writable: false,
});
